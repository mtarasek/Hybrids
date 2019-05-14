import React, { Component } from 'react';

import './index.css';
import HybridsForWho from '../hybridsForWho';

export default class Home extends Component {
  render() {
    return (
      <div id="container">
        <section>
          <h2>Co to jest hybryda?</h2>
          <p>Manicure hybrydowy to doskonałe rozwiązanie dla kobiet, które cenią sobie oszczędność czasu i elegancki wygląd.</p>
          <p>
            Jest to jeden z najchętniej wybieranych przez kobiety rodzajów manicure. Lakiery hybrydowe, wykorzystywane w tej nowatorskiej metodzie stylizacji paznokci, łączą
            w sobie zalety lakierów klasycznych, ale i elastycznych lakierów żelowych. Ich aplikacja jest równie prosta, a warstwy lakieru cienkie, dzięki czemu manicure wygląda
            naturalnie, a jednocześnie jest bardzo trwały i odporny na uszkodzenia i odpryski. Paznokcie za sprawą manicure hybrydowego zyskują piękny połysk i blask, który
            utrzymuje się nawet do 3 tygodni, co jest niemożliwe do osiągnięcia przy klasycznej metodzie stylizacji.
         </p>
        </section>

        <section>
          <h2>Macicure hybrydowy to:</h2>
          <ul>
            <li>do 21 dni <b> trwałości</b></li>
            <li><b>bogata paleta</b> kolorów</li>
            <li><b>piękny połysk,</b> który nie maleje</li>
            <li><b>odporność</b> na uszkodzenia mechaniczne</li>
            <li>możliwość tworzenia<b> niepowtarzalnych stylizacji</b></li>
            <li>możliwość zapuszczenia <b> długich,</b> pięknych paznokci</li>
          </ul>
        </section>

        <section>
          <h2>Manicure hybrydowy - dla kogo?</h2>
          <div id="hybridsForWHoList">
            <HybridsForWho image="https://semilac.pl/media/wysiwyg/edukacja/time.png" text="Dla tych, którzy oszczędzają swój czas" />
            <HybridsForWho image="https://semilac.pl/media/wysiwyg/edukacja/pillow.png" text="Dla tych, którzy cenią sobie komfort i wygodę" />
            <HybridsForWho image="https://semilac.pl/media/wysiwyg/edukacja/diamond.png" text="Dla tych, którzy lubią wyglądać perfekcyjnie" />
            <HybridsForWho image="https://semilac.pl/media/wysiwyg/edukacja/star-phone.png" text="Dla tych, którzy lubią być trendy" />
            <HybridsForWho image="https://semilac.pl/media/wysiwyg/edukacja/cup.png" text="Dla tych, którzy lubią sprawdzone rozwiązania" />
          </div>

        </section>

      </div>
    )
  }
}
