<template>
  <div class="item1">


    <div class="item2">
      <div id="promos">
        <div class="promoinside">
          <nav class="navMenu">
            <a href="#">Copy | </a><a href="#"> CSV | </a><a href="#">PDF |</a>
            <a href="#">Print</a>
          </nav>
        </div>
      </div>
      <div class="searchpos">
        <span class="material-icons">search</span>
        <input type="text" placeholder="Search..">
      </div>
      <div class="ddpos">
        <div class="dropdown">
          <button class="bowton" type="button" data-toggle="dropdown">Dropdown Example
            <span class="caret"></span></button>
          <ul class="dropdown-menu">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

.bowton {
  width: 120px;
  height: 28px;
  background-color: white;
  box-shadow: 5px 5px 10px grey;

  font-size: 10px;
  padding: 10px;
}

.ddpos {
  align-items: right;
  margin-top: -2.3%;
  margin-left: 84%;
}

.searchpos {
  align-items: right;
  margin-left: 67%;
  margin-top: -4%;
}

#promos {
  margin: 10px 5px 10px 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  padding-top: 2px;
  width: 160px;
  height: 30px;
  background-color: #8ECAE6;
  border-style: solid;
  border-width: 1px;
  border-color: #cacaca;
  -moz-box-shadow: 0 0 4px #dadada;
  -webkit-box-shadow: 0 0 4px#dadada;
  box-shadow: 0 0 3px #dadada;
  margin-top: 3%;
  margin-left: 4%;
}

.promoinside {
  position: absolute;
  width: 220px;
  background: #f5f5f5;
  background: -webkit-gradient(linear, left top, left bottom, from(#fafafa), to(#eeeeee));
  background: -moz-linear-gradient(top, #fafafa, #eeeeee);
}

.promoinside:hover {
  background: #fbfbfb;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.navMenu {
  position: absolute;
  margin-top: 5%;
  margin-left: 37%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.navMenu a {
  color: #030303;
  text-decoration: none;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 300;
  display: inline-block;
  width: 34px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.navMenu a:hover {
  color: #fddb3a;
}

#myDIV div {
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 30px;
}

.item1 {
  width: 100%;
  grid-column: 1 / span 1;
}

.item3 {
  margin-top: 3%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.ulonipaulo {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
}

.solid2 {
  background: linear-gradient(white, white) padding-box,
    linear-gradient(90deg,
      rgba(76, 81, 159, 1) 0%,
      rgba(104, 51, 138, 1) 20%,
      rgba(247, 5, 63, 1) 100%) border-box;
  border: 2px solid transparent;
  margin-bottom: 15px;
}

.customers {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  border-collapse: collapse;
}

.customers td,
.customers th {
  border-bottom: 2px solid #000000;
  border-top: 2px solid #000000;
  border-right: 2px solid #b0b0b0;
  border-left: 2px solid #b0b0b0;
  padding: 8px;
  font-size: small;
  font-weight: 4;
  text-align: center;
}

.customers tr:nth-child(even) {
  background-color: #f2f2f2;
  text-align: center;
}

.customers tr:hover {
  background-color: #ddd;
  text-align: center;
}

.customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4c519f;
  color: white;
}</style>