import css from "../img/icons/css.svg";
import discord from "../img/icons/discord.svg";
import github from "../img/icons/github.svg";
import html from "../img/icons/html5.svg";
import js from "../img/icons/javascript.svg";
import lc from "../img/icons/leetcode.svg";
import python from "../img/icons/python.svg";
import react from "../img/icons/react.svg";
import ts from "../img/icons/typescript.svg";
import pfp from "../img/pfp.jpg";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function About() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Moscow",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
      month: "short",
      day: "numeric",
    });
    const tick = () => {
      const parts = formatter.formatToParts(new Date());
      const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));

      setTime({
        hours: map.hour,
        minutes: map.minute,
        seconds: map.second,
        day: map.day,
        month: map.month,
        weekday: map.weekday,
      });
    };
    tick();
    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="about" id="about">
      <h2 className="about__title title">ABOUT ME</h2>
      <div className="about__grid">
        <Card className="about__item about__item--intro bg-liquid-glass">
          <img
            className="about__pfp"
            src={pfp}
            alt="profile picture"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
          <p className="about__intro-text">
            hi ima yanrin
            <br />
            19 y.o.
          </p>
        </Card>
        <Card className="about__item about__item--bio bg-liquid-glass">
          <p className="about__bio-text">
            WEB developer, mostly frontend <br />
            design enthusiast <br />
            hobbyist artist
          </p>
        </Card>
        <Card className="about__item about__item--leetcode bg-liquid-glass about__cards">
          <img className="about__card" src="-" alt="LeetCode Stats" />

          <a className="about__card" href="-" target="_blank" rel="noreferrer">
            <img src="-" alt="Discord" />
          </a>
        </Card>

        <Card className="about__item about__item--date bg-liquid-glass">
          <p className="about__time">{`${time.hours}:${time.minutes}:${time.seconds}`}</p>
          <p className="about__date">{`${time.day} ${time.month}, ${time.weekday}`}</p>
        </Card>
        <Card className="about__item about__item--music bg-liquid-glass">
          my favorite song
          <iframe
            className="about__youtube"
            width="300"
            height="80"
            src="-"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Card>
        <Card className="about__item about__item--stack bg-liquid-glass">
          <ul className="about__stack-icons">
            <li className="about__icon">
              <img src={react} alt="react" />
            </li>
            <li className="about__icon">
              <img src={html} alt="html" />
            </li>
            <li className="about__icon">
              <img src={css} alt="css" />
            </li>
            <li className="about__icon">
              <img src={python} alt="python" />
            </li>
            <li className="about__icon">
              <img src={js} alt="js" />
            </li>
            <li className="about__icon">
              <img src={ts} alt="ts" />
            </li>
          </ul>
        </Card>
        <Card className="about__item about__item--contact bg-liquid-glass">
          <ul className="about__contact-icons">
            <li className="about__icon">
              <a href="-">
                <img src={github} alt="github" />
              </a>
            </li>
            <li className="about__icon">
              <a href="-">
                <img src={discord} alt="discord" />
              </a>
            </li>
            <li className="about__icon">
              <a href="-">
                <img src={lc} alt="leetcode" />
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
