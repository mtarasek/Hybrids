import React, { Component } from 'react';
import './index.css';

export default class HybridStepByStep extends Component {
    render() {
        return (
            <div id="hybridStepBySTepcontainer">
                <section>
                    <h1 class="subtitle">Manicure hybrydowy krok po kroku</h1>
                    <div id="images">
                        <img class="image" src="https://1.bp.blogspot.com/-CbPo8V9Kt64/VuWoynq0JZI/AAAAAAAAFqI/Ktg1FHarwd0tXMvjkgXa0Y6-hKkvyjeMQ/s1600/hybrydy%2Bkrok%2Bpo%2Bkroku%2B2.jpg" alt="image" />
                        <img class="image" src="http://archiwum.szkolenia.zdz.bialystok.pl/elk/images/Paznokcie_ombre_jak_zrobi%C4%87_diy_dwukolorowe_g%C5%82adkie_Pinterest_tumblr_paznokie%C4%87_tipsy_tips_%C5%9Bmieszne_serca_serduszka_kolorowe_ciekawe_pomys%C5%82_kolory_wielokolorowe_moda_blog_o_modzie_wzory_wzorki.jpg" alt="image" />
                    </div>
                    <p class="text">Uwielbiasz cieszyć się perfekcyjnym manicure przez kilka tygodni? Naucz się samodzielnie wykonywać stylizację. Dowiedz się czego potrzebujesz, aby zrobić hybrydy w domu.</p>
                </section>

                <section>
                    <h2 class="subtitle">Czego potrzebujesz do wykonania manicure hybrydowego?</h2>
                    <ul>
                        <li>Lampa do utwardzania lakierów hybrydowych.</li>
                        <li>Hard base – lakier podkładowy.</li>
                        <li>Kolorowy lakier hybrydowy.</li>
                        <li>Hard top – lakier nawierzchniowy.</li>
                        <li>Akcesoria: patyczki lub kopytko, pilnik 100/180, blok polerski, waciki.</li>
                        <li>Cleaner.</li>
                    </ul>
                    <img class="stepBySTepImage" src="https://nefelle.pl/cms/uploads/2016/12/e8ac3aa84c2ea3484d43301f7af4.jpg" alt="obrazek" />
                </section>

                <section>
                    <h2 class="subtitle">Jak nałożyć lakiery hybrydowy?</h2>
                    <ul>
                        <li>Patyczkiem z drzewa różanego lub metalowym kopytkiem delikatnie, ale dokładnie odsuń skórki.</li>
                        <li>Paznokieć ukształtuj pilnikiem o gradacji 180.</li>
                        <li>Delikatnie zmatuj płytkę paznokcia blokiem polerskim.</li>
                        <li>Przetrzyj płytkę wacikiem nasączonym cleaner’em.</li>
                        <li>Nałóż cienką warstwę NeoNail HARD BASE i utwardź w lampie według tabeli. Nie przemywaj cleaner’em.</li>
                        <li>Nanieś cienką warstwę lakieru hybrydowego NeoNail COLOR i utwardź w lampie według tabeli. Nałóż drugą warstwę lakieru, aby uzyskać głębię koloru. Nie przemywaj cleaner’em.</li>
                        <li>Nałóż cienką warstwę NeoNail HARD TOP, który utrwali kolor i nada stylizacji połysku. Utwardź w lampie. Odczekaj chwilkę, a następnie przemyj cleaner’em.</li>
                    </ul>
                    <img class="stepBySTepImage" src="https://o-you.pl/wp-content/uploads/2015/07/melkior_manicure_hybrydowy_poziom_A4-01.resized.jpg" alt="obrazek" />
                </section>

                <section>
                    <h2 class="subtitle">Jak zdjąć lakier hybrydowy w domu?</h2>
                    <ul>
                        <li>Zmatuj blokiem polerskim błyszczącą warstwę poprzedniej stylizacji, aby aceton lepiej wniknął.</li>
                        <li>Nanieś aceton na wacik i przykryj nim paznokieć. Owiń palec folią aluminiową.</li>
                        <li>Po upływie 10 min zsuń lakier przy pomocy patyczka lub kopytka. Pozostałości lakieru usuń delikatną polerką.</li>
                        <li>Jeśli nie nakładasz kolejnej stylizacji, warto zastosować oliwkę do skórek albo wykonać manicure japoński, który odżywi i wzmocni płytkę, nadając jej połysk. </li>
                    </ul>
                    <img class="stepBySTepImage" src="https://4.bp.blogspot.com/-2xJ9BWtWXUU/UxTNkz2I8vI/AAAAAAAAIYM/0umabHCtKdM/s1600/zdejmowanie_semilac.png" alt="obrazek" />
                </section>

            </div>
        )
    }
}
