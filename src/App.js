import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Belief from "./Pages/Belief";
import Gallery from "./Pages/Gallery";
import Team from "./Pages/Team";
import Give from "./Pages/Give";
import Stories from "./Pages/Stories";
import Testimonies from "./Pages/Testimonies";
import Confession from "./Pages/Confession";
import Events from "./Pages/Events";
import Login from "./Pages/Login";
import UgCalendar from "./Pages/UgCalendar";
import PgCalendar from "./Pages/PgCalendar";
import Sermon from "./Pages/Sermon";
import Error from "./Error";
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      birthdayData: null
    }
  }
  setBirthdayData = (data) => {
    this.setState({
      birthdayData: data
    });
  };
      toggleClass = () => {
        const control = document.querySelector(".custom-control-input");
        control.checked ? window.localStorage.setItem("theme", "dark") : window.localStorage.removeItem("theme");
        const image = document.querySelector(".counts .image img");
        window.localStorage.getItem("theme") === "dark" ? control.checked = true : control.checked = false;
        if (image){
          window.localStorage.getItem("theme") === "dark" ? image.classList.add("darkTheme") : image.classList.remove("darkTheme");
       }
        this.themedBody();
      }
     themedBody = () => {
       const element = document.body;
       window.localStorage.getItem("theme") === "dark" ? element.classList.add("darkTheme") : element.classList.remove("darkTheme");
      }
      componentDidMount(){
        const control = document.querySelector(".custom-control-input");
        const image = document.querySelector(".counts .image img");
        window.localStorage.getItem("theme") === "dark" ? control.checked = true : control.checked = false;
        if (image){
          window.localStorage.getItem("theme") === "dark" ? image.classList.add("darkTheme") : image.classList.remove("darkTheme");
       }
     }
      render(){
        this.themedBody();
    return (
      <main>
          <Switch>
              <Route path="/" render={renderprops =>
                <Home toggleClass={this.toggleClass} {...renderprops} />} exact />
              <Route path="/about" render={renderprops =>
                <About toggleClass={this.toggleClass} {...renderprops} />} />
              <Route path="/belief" render={renderprops =>
                <Belief toggleClass={this.toggleClass} {...renderprops} />} />
              <Route path="/gallery" render={renderprops =>
                <Gallery toggleClass={this.toggleClass} {...renderprops} />} />
              <Route path="/team" render={renderprops =>
                <Team toggleClass={this.toggleClass} {...renderprops} />} />
              <Route path="/give" render={renderprops =>
                <Give toggleClass={this.toggleClass} {...renderprops} />} />
              <Route path="/stories" render={renderprops =>
                <Stories toggleClass={this.toggleClass} {...renderprops} />} />
              <Route path="/testimonies" render={renderprops =>
                <Testimonies toggleClass={this.toggleClass} {...renderprops} />} />
              <Route path="/confessions" render={renderprops =>
                <Confession toggleClass={this.toggleClass} {...renderprops} />} />
              <Route path="/events" render={renderprops =>
                <Events toggleClass={this.toggleClass} {...renderprops} />} />
              <Route path="/sermon" render={renderprops =>
                <Sermon toggleClass={this.toggleClass} {...renderprops} />} />
              <Route path="/login" render={renderprops =>
                <Login toggleClass={this.toggleClass} setBirthdayData={this.setBirthdayData} {...renderprops} />} />
              <Route path="/ugCalendar" render={renderprops =>
                <UgCalendar toggleClass={this.toggleClass} birthdayData={this.state.birthdayData} {...renderprops} />} />
              <Route path="/pgCalendar" render={renderprops =>
                <PgCalendar toggleClass={this.toggleClass} birthdayData={this.state.birthdayData} {...renderprops} />} />
              <Route render={renderprops =>
                <Error toggleClass={this.toggleClass} {...renderprops} />} />
          </Switch>
      </main>
    )
    }
}