# Проектная работа: Article Customizer

Для запуска Storybook выполните:

```
npm run storybook
```

Установите зависимости и запустите проект:

```
npm install
npm run build
npm run start
```

---

# Документация проекта "Article Customizer"

## Общее описание
"Article Customizer" — это React-приложение, которое позволяет пользователю настраивать внешний вид статьи (шрифт, размер текста, цвет текста, фон страницы и ширину контента) через боковую форму. Изменения применяются только после нажатия кнопки "Применить", а сброс к начальным настройкам возможен через "Сбросить". Проект использует TypeScript для типизации, CSS-переменные для стилей и модульные SCSS-файлы для управления внешним видом.

---

## Структура проекта:

### Основные файлы и компоненты
1. `index.tsx`  
   - Точка входа приложения.
   - Содержит компонент App, который управляет глобальным состоянием (`currentState`) и задает CSS-переменные для всей страницы.
   - Рендерит Article внутри <main>.

2. `Article.tsx`  
   - Главный компонент статьи.
   - Отображает статический контент (заголовок, текст, изображение).
   - Управляет открытием/закрытием формы (`isOpen`).
   - Передает currentState в ArticleParamsForm и обрабатывает применение/сброс.

3. `ArticleParamsForm.tsx`  
   - Компонент формы для настройки параметров.
   - Содержит локальное состояние pendingState для временных изменений.
   - Включает селекторы и кнопки для управления настройками.

4. Селекторы:
   - FontSelector.tsx — выбор семейства шрифта.
   - FontSizeRadioButton.tsx — выбор размера шрифта (радиокнопки).
   - FontColorSelector.tsx — выбор цвета текста.
   - BackgroundColorSelector.tsx — выбор цвета фона страницы.
   - ContentWidthSelector.tsx — выбор ширины контента.
   - Каждый селектор использует локальное состояние для UI и передает изменения в pendingState.

5. `articleProps.ts`  
   - Файл с константами: defaultArticleState (начальные настройки) и массивы опций (`fontFamilyOptions`, fontSizeOptions, fontColor, backgroundColors, `contentWidthArr`).

6. Стили:
   - index.scss — глобальные стили (например, фон <body> через `--bg-color`).
   - Article.module.scss — стили для статьи (ширина через `--container-width`).
   - Text.module.scss — стили для текста (шрифт, размер, цвет через CSS-переменные).
   - ArticleParamsForm.module.scss — стили формы.

---

## Как работает проект:

### Архитектура состояния
- Глобальное состояние (`currentState`):
  - Хранится в App (в `index.tsx`).
  - Содержит примененные настройки статьи: fontFamilyOption, fontSizeOption, fontColor, backgroundColor, contentWidth.
  - Обновляется только при "Применить" или "Сбросить".
  - Используется для рендера статьи через CSS-переменные (`--font-family`, --font-size, --font-color, --container-width, `--bg-color`).

- Локальное состояние формы (`pendingState`):
  - Хранится в ArticleParamsForm.
  - Инициализируется из currentState при первом рендере.
  - Содержит временные настройки, которые пользователь изменяет в форме.
  - Обновляется при взаимодействии с селекторами (например, выбор шрифта или цвета).
  - Передается в currentState через onApply при нажатии "Применить".

### Поток данных
1. Инициализация:
   - При загрузке страницы currentState в App устанавливается в defaultArticleState.
   - ArticleParamsForm получает currentState и копирует его в pendingState.

2. Изменение параметров:
   - Пользователь открывает форму (`isOpen = true`) через ArrowButton.
   - Выбирает настройки (шрифт, размер, цвет, фон, ширину) в селекторах.
   - Селекторы обновляют pendingState через локальные обработчики (`handleFontChange`, handleSizeChange, etc.).
   - UI селекторов (радиокнопки, выпадающие списки) отражает pendingState.

3. Применение изменений:
   - Пользователь нажимает "Применить".
   - Форма вызывает onApply(pendingState), передавая временное состояние в Article, а затем в App.
   - App обновляет currentState, и CSS-переменные применяются к странице.

4. Сброс:
   - Пользователь нажимает "Сбросить".
   - Форма локально сбрасывает pendingState до defaultArticleState и вызывает onReset.
   - App сбрасывает currentState до defaultArticleState, обновляя страницу.

---

## Основные компоненты и их назначение

### 1. App (`index.tsx`)
- Роль: Корневой компонент, управляет примененным состоянием (`currentState`) и задает глобальные стили.
- Пропсы: Нет.
- Состояние: currentState — объект типа ArticleStateType.
- CSS-переменные:
  - --font-family: семейство шрифта текста.
  - --font-size: размер текста (в пикселях).
  - --font-color: цвет текста.
  - --container-width: ширина контента статьи (в пикселях).
  - --bg-color: цвет фона всей страницы.

### 2. Article (`Article.tsx`)
- Роль: Отображает статью и управляет видимостью формы.
- Пропсы:
  - currentState: текущее примененное состояние.
  - onApply: функция для передачи нового состояния в App.
  - onReset: функция для сброса состояния.
- Состояние: isOpen — булево, показывает/скрывает форму.

### 3. ArticleParamsForm (`ArticleParamsForm.tsx`)
- Роль: Форма для настройки параметров статьи.
- Пропсы:
  - isOpen: видимость формы.
  - onOpenChange: переключение видимости.
  - currentState: начальное состояние для pendingState.
  - onApply: передача pendingState в Article.
  - onReset: уведомление о сбросе.
- Состояние: pendingState — временные настройки формы.
- Особенности:
  - Закрывается кликом вне формы через useOutsideClickClose.
  - Использует <form> с событиями onSubmit (применить) и onReset (сбросить).

### 4. Селекторы
- Общая логика:
  - Каждый селектор имеет локальное состояние (`useState`) для UI (например, выбранная радиокнопка или опция в `<Select>`).
  - Принимает текущее значение из pendingState через пропсы (`selectedFont`, selectedSize, etc.).
  - Обновляет pendingState через обработчики (`onFontChange`, onSizeChange, etc.).
- Компоненты:
  - FontSelector: выпадающий список для шрифтов.
  - FontSizeRadioButton: радиокнопки для размера текста.
  - FontColorSelector: выпадающий список для цвета текста.
  - BackgroundColorSelector: выпадающий список для фона.
  - ContentWidthSelector: выпадающий список для ширины.

---

##  Стилизация
- CSS-переменные:
  - Задаются в <main> в App и наследуются всеми элементами.
  - Применяются в Text.module.scss (`.dynamic`, .dynamicLite`) для текста и в `Article.module.scss для ширины статьи.
  - Фон страницы задается через --bg-color в index.scss для <body>.

- Модульные стили:
  - Каждый компонент имеет свой .module.scss файл (например, ArticleParamsForm.module.scss для формы).
  - Классы добавляются через clsx для условной стилизации (например, `container_open`).

---

##  Технические детали
- TypeScript:
  - Используется тип ArticleStateType для currentState и pendingState.
  - Пользовательские CSS-переменные поддерживаются через types.d.ts:
       declare module 'react' {
      interface CSSProperties {
        [key: `--${string}`]: string | number;
      }
    }
    
- React:
  - Приложение работает в StrictMode.
  - Используются хуки useState, useEffect (в селекторах), useRef (в форме для закрытия).

---

