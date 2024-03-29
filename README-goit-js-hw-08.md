# goit-js-hw-08
===================
Критерії приймання
===================
    Створено репозиторій goit-js-hw-08.
    Домашня робота містить два посилання: на вихідні файли і робочу сторінку на GitHub Pages.
    В консолі відсутні помилки і попередження під час відкриття живої сторінки завдання.
    Проект зібраний за допомогою parcel-project-template (https://github.com/goitacademy/parcel-project-template).
    Код відформатований за допомогою Prettier.
===============
Стартові файли
===============
Завантажуй стартові файли (https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Fjavascript-homework%2Ftree%2Fmain%2Fv2%2F08%2Fsrc) з готовою розміткою, стилями та підключеними файлами скриптів для кожного завдання. Скопіюй їх собі в проект, повністю замінивши папку src у parcel-project-template (https://github.com/goitacademy/parcel-project-template).

=======================================
Завдання 1 - бібліотека SimpleLightbox
=======================================
Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

    Додай бібліотеку SimpleLightbox (https://simplelightbox.com/) як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
    Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).

Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
========================
Завдання 2 - відеоплеєр
========================
HTML містить <iframe> з відео для Vimeo плеєра. Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>

Виконуй це завдання у файлах 02-video.html і 02-video.js. Розбий його на декілька підзавдань:

    Ознайомся з документацією (https://github.com/vimeo/player.js/#vimeo-player-api) бібліотеки Vimeo плеєра.
    Додай бібліотеку як залежність проекту через npm.
    Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player (https://github.com/vimeo/player.js/#pre-existing-player), але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
    Вивчи документацію методу on() (https://github.com/vimeo/player.js/#onevent-string-callback-function-void) і почни відстежувати подію timeupdate (https://github.com/vimeo/player.js/#events) - оновлення часу відтворення.
    Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
    Під час перезавантаження сторінки скористайся методом setCurrentTime() (https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror) з метою відновлення відтворення зі збереженої позиції.
    Додай до проекту бібліотеку lodash.throttle (https://www.npmjs.com/package/lodash.throttle) і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
======================================
Завдання 3 - форма зворотного зв'язку
======================================
HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

    Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
    Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
    Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
    Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle (https://www.npmjs.com/package/lodash.throttle).

====================================================================================
Корисна інформація. Оператор опциональной последовательности ?.
=================================================================
Оператор опциональной последовательности ?. позволяет получить значение свойства, находящегося на любом уровне вложенности в цепочке связанных между собой объектов, без необходимости проверять каждое из промежуточных свойств в ней на существование. ?. работает подобно оператору ., за исключением того, что не выбрасывает исключение, если объект, к свойству или методу которого идёт обращение, равен null или undefined. В этих случаях он возвращает undefined. 
//
let nestedProp = obj.first?.second;
Если используется оператор ?. вместо ., JavaScript знает о необходимости проверки obj.first перед обращением к obj.first.second. Если значение obj.first равно null или undefined, выполнение выражения автоматически прекращается и возвращается undefined.
//
Это эквивалентно следующему (кроме создания временной переменной):
let temp = obj.first;
let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.second);
//
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining
=====================================================================================
============
Від ментора
============
Всім привіт
Підказки до виконання ДЗ-08: ця робота виконується вже за допомогою Парсела, тому уважно читаєм ТЗ і файл read.me в шаблоній збірці Саші Репети, щоб правильно звʼязати ваш репозиторій з шаблоном, встановити всі залежності, налаштувати gh-pages і правильно запускати збірку. Go Live в цій роботі вже не використовуємо. Для запуска процеса розробки в терміналі використовуємо команду npm start і використовуємо локальний сервер, який створює Парсел для перегляду результату в браузері. У кого система Віндовс, не використовуєм термінал powershell. Замінюємо його на bash або git bash Усі бібліотеки встановлюємо в проект за допомогою npm. cdn-посилання на бібліотеки не використовуєм. В завданні 2 домашньої роботи уважно читаємо ТЗ, щоб правильно використати потрібні методи бібліотеки, а саме метод on() з подією timeupdate і метод setCurrentTime() для встановлення часу після перезавантаження сторінки. Також не забуваємо перевіряти наявність данних, коли читаєте з localStorage. Якщо в localStorage немає ключа, який ви намагаєтесь прочитати, метод getItem(key) поверне вам null. В завданні 3 також потрібно перевіряти всі значення, які ви читаєте з localStorage і записуєте в поля форми. Якщо там пусто, вам у поля запишеться undefined. При сабміті форми не забувайте чистити обʼєкт в якому зберігаєте значення з полів форми, щоб інформація не тягнулась в наступні сабміти. Форма має відправлятись при заповнених 2-х полях форми
==============