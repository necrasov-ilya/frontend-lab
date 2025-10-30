# Подробный план инициализации React проекта для студентов

## 1. Подготовка и настройка окружения

### 1.1 Установка Node.js и npm
- Скачать и установить Node.js с официального сайта
- Проверить установку: `node --version` и `npm --version`
- Рекомендуемая версия: Node.js 16+ и npm 8+

### 1.2 Создание структуры проекта
```
my-react-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── styles/
│   └── utils/
├── webpack.config.js
├── package.json
└── README.md
```

## 2. Инициализация проекта

### 2.1 Создание package.json
```bash
mkdir my-react-app
cd my-react-app
npm init -y
```

### 2.2 Установка зависимостей

#### Основные зависимости:
```bash
# React
npm install react react-dom

# Redux
npm install @reduxjs/toolkit react-redux

# Webpack и загрузчики
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev html-webpack-plugin
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
npm install --save-dev css-loader style-loader

# Дополнительные утилиты
npm install --save-dev webpack-merge clean-webpack-plugin
```

## 3. Настройка Webpack

### 3.1 Создание webpack.config.js
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
```

### 3.2 Настройка Babel (.babelrc)
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## 4. Создание базовой структуры файлов

### 4.1 public/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My React App</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

### 4.2 src/index.js
```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    Hello world
  </React.StrictMode>
);
```

## 5. Настройка package.json scripts

### 5.1 Добавление скриптов в package.json
```json
{
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production",
    "dev": "webpack --mode development"
  }
}
```

## 6. Запуск проекта

### 6.1 Запуск в режиме разработки
```bash
npm start
```

### 6.2 Сборка для продакшена
```bash
npm run build
```

## 7. Проверка работоспособности

### 7.1 Тестирование функционала
- Открыть браузер по адресу http://localhost:3000
- Проверить работу счетчика
- Убедиться, что состояние сохраняется правильно
