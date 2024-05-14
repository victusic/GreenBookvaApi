<h1 align="center">Green Bookva (Api)</h1>

<h3>ENG</h3>
<h4>Api for Green Bookva bookstore</h4> 
<h5>Examples of requests:</h5>
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Type</td>
    <td>Path</td>
    <td>Result</td>
  </tr>
  <tr>
    <td>1</td> <td>GET</td>
    <td>https://db.greenbookva.shop/recommendation_banner</td>
    <td>{
        "image": "65qses7mffatkc36vial.webp",
        "product_id": 900
    }</td>
  </tr>
  <tr>
    <td>2</td> <td>GET</td>
    <td>https://db.greenbookva.shop/promotions_slider</td>
    <td>{
        "id": 3,
        "banner": "neoux6p4dyhncaffni4i.webp"
    },
    {
        "id": 10,
        "banner": "54pz8ybggwled5owkhod.webp"
    }</td>
  </tr>
  <tr>
    <td>3</td> <td>GET</td>
    <td>https://db.greenbookva.shop/promotions</td>
    <td>{
        "id": 1,
        "name": "Фэнтезийные миры",
        "duration": 20,
        "banner": "wmqvg3aboyofmmpxa4fy.webp",
        "short_description": "–22% на подборку книг Нила Геймана, Джона Толкина и не только"
    },<br>
    {
        "id": 2,
        "name": "Студенческая скидка",
        "duration": 0,
        "banner": "jhb0misvzx7ooh7xnlxw.webp",
        "short_description": "Скидка 15% на всё при предъявлении студенческого билета"
    }</td>
  </tr>
  <tr>
    <td>4</td> <td>GET</td>
    <td>https://db.greenbookva.shop/promotions/:id</td>
    <td>{
        "id": 1,
        "name": "Фэнтезийные миры",
        "duration": 20,
        "banner": "wmqvg3aboyofmmpxa4fy.webp",
        "full_description": "В книгах из нашей подборки – порталы в волшебные миры. Поэтому приготовьтесь к встречам с дружными хоббитами, грозными драконами и мудрыми колдуньями. Выбирайте свои сюжеты и готовьтесь к прогулкам по необычным краям! "
    }</td>
  </tr>
</table>

<h4>See result: https://greenbookva.shop/</h4>

<h4>The project is powered by <a href="https://github.com/victusic/GreenBookvaFront">GreenBookvaFront</a></h4>

<h5>Additionally:</h5>
<ul>
  <li><a href="https://www.figma.com/file/MNIRiMpLyB3krgtCViVkhe/greenBookva?type=design&node-id=0%3A1&mode=design&t=yUH5tkRf9JODAQhw-1">Project in Figma (Ui Kit, design)</a></li> 
  <li><a href="https://drive.google.com/drive/folders/1ohxieZ_U31q61mQcNQkOw1FyBHyYmExR?usp=sharing">Sketch file and ER</a></li>
</ul>

<h3>RU</h3>
<h4>Api для книжного магазина Green Bookva - данный в формате json</h4>
<h5>Примеры запросов:</h5>
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Type</td>
    <td>Path</td>
    <td>Result</td>
  </tr>
  <tr>
    <td>1</td> <td>GET</td>
    <td>https://db.greenbookva.shop/recommendation_banner</td>
    <td>{
        "image": "65qses7mffatkc36vial.webp",
        "product_id": 900
    }</td>
  </tr>
  <tr>
    <td>2</td> <td>GET</td>
    <td>https://db.greenbookva.shop/promotions_slider</td>
    <td>{
        "id": 3,
        "banner": "neoux6p4dyhncaffni4i.webp"
    },
    {
        "id": 10,
        "banner": "54pz8ybggwled5owkhod.webp"
    }</td>
  </tr>
  <tr>
    <td>3</td> <td>GET</td>
    <td>https://db.greenbookva.shop/promotions</td>
    <td>{
        "id": 1,
        "name": "Фэнтезийные миры",
        "duration": 20,
        "banner": "wmqvg3aboyofmmpxa4fy.webp",
        "short_description": "–22% на подборку книг Нила Геймана, Джона Толкина и не только"
    },<br>
    {
        "id": 2,
        "name": "Студенческая скидка",
        "duration": 0,
        "banner": "jhb0misvzx7ooh7xnlxw.webp",
        "short_description": "Скидка 15% на всё при предъявлении студенческого билета"
    }</td>
  </tr>
  <tr>
    <td>4</td> <td>GET</td>
    <td>https://db.greenbookva.shop/promotions/:id</td>
    <td>{
        "id": 1,
        "name": "Фэнтезийные миры",
        "duration": 20,
        "banner": "wmqvg3aboyofmmpxa4fy.webp",
        "full_description": "В книгах из нашей подборки – порталы в волшебные миры. Поэтому приготовьтесь к встречам с дружными хоббитами, грозными драконами и мудрыми колдуньями. Выбирайте свои сюжеты и готовьтесь к прогулкам по необычным краям! "
    }</td>
  </tr>
</table>

<h4>Увидеть результат: https://greenbookva.shop/</h4>

<h4>Проект работает с помощью <a href="https://github.com/victusic/GreenBookvaFront">GreenBookvaFront</a></h4>

<h5>Дополнительно:</h5>
<ul>
  <li><a href="https://www.figma.com/file/MNIRiMpLyB3krgtCViVkhe/greenBookva?type=design&node-id=0%3A1&mode=design&t=yUH5tkRf9JODAQhw-1">Проект в Figma (Ui Kit, design)</a></li>
  <li><a href="https://drive.google.com/drive/folders/1ohxieZ_U31q61mQcNQkOw1FyBHyYmExR?usp=sharing">Файл с набросками и ER</a></li>
</ul>

<h6>Презентационная работа</h6>
