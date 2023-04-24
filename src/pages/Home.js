
import Download from '../components/download'; 
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/style.css'


function Home() {
 
    return (


        <div className="Home">

            <header className="head">
                <h1><FontAwesomeIcon icon={faLanguage}/> Google Translate Text-to-Speech Downloader</h1>
            </header>


            <section>
                <div className='form_area'>
                    <form method='POST'>


                        <label for='language' className='label'>Select the Language</label>
                        <input className="input" list='languages' id='language' name='LanguageName' placeholder="Language"></input>
                        <datalist id="languages">
                            <option value="Afrikaans" />
                            <option value="Albanian" />
                            <option value="Amharic" />
                            <option value="Arabic" />
                            <option value="Armenian" />
                            <option value="Azerbaijani" />
                            <option value="Basque" />
                            <option value="Belarusian" />
                            <option value="Bengali" />
                            <option value="Bosnian" />
                            <option value="Bulgarian" />
                            <option value="Catalan" />
                            <option value="Cebuano" />
                            <option value="Chichewa" />
                            <option value="Chinese (Simplified)" />
                            <option value="Chinese (Traditional)" />
                            <option value="Corsican" />
                            <option value="Croatian" />
                            <option value="Czech" />
                            <option value="Danish" />
                            <option value="Dutch" />
                            <option value="English" />
                            <option value="Esperanto" />
                            <option value="Estonian" />
                            <option value="Filipino" />
                            <option value="Finnish" />
                            <option value="French" />
                            <option value="Frisian" />
                            <option value="Galician" />
                            <option value="Georgian" />
                            <option value="German" />
                            <option value="Greek" />
                            <option value="Gujarati" />
                            <option value="Haitian Creole" />
                            <option value="Hausa" />
                            <option value="Hawaiian" />
                            <option value="Hebrew" />
                            <option value="Hindi" />
                            <option value="Hmong" />
                            <option value="Hungarian" />
                            <option value="Icelandic" />
                            <option value="Igbo" />
                            <option value="Indonesian" />
                            <option value="Irish" />
                            <option value="Italian" />
                            <option value="Japanese" />
                            <option value="Javanese" />
                            <option value="Kannada" />
                            <option value="Kazakh" />
                            <option value="Khmer" />
                            <option value="Kinyarwanda" />
                            <option value="Korean" />
                            <option value="Kurdish (Kurmanji)" />
                            <option value="Kyrgyz" />
                            <option value="Lao" />
                            <option value="Latin" />
                            <option value="Latvian" />
                            <option value="Lithuanian" />
                            <option value="Luxembourgish" />
                            <option value="Macedonian" />
                            <option value="Malagasy" />
                            <option value="Malay" />
                            <option value="Malayalam" />
                            <option value="Maltese" />
                            <option value="Maori" />
                            <option value="Marathi" />
                            <option value="Mongolian" />
                            <option value="Myanmar (Burmese)" />
                            <option value="Nepali" />
                            <option value="Norwegian" />
                            <option value="Odia (Oriya)" />
                            <option value="Pashto" />
                            <option value="Persian" />
                            <option value="Polish" />
                            <option value="Portuguese" />
                            <option value="Punjabi" />
                            <option value="Romanian" />
                            <option value="Russian" />
                            <option value="Samoan" />
                            <option value="Scots Gaelic" />
                            <option value="Serbian" />
                            <option value="Sesotho" />
                            <option value="Shona" />
                            <option value="Sindhi" />
                            <option value="Sinhala" />
                            <option value="Slovak" />
                            <option value="Slovenian" />
                            <option value="Somali" />
                            <option value="Spanish" />
                            <option value="Sundanese" />
                            <option value="Swahili" />
                            <option value="Swedish" />
                            <option value="Tajik" />
                            <option value="Tamil" />
                            <option value="Tatar" />
                            <option value="Telugu" />
                            <option value="Thai" />
                            <option value="Turkish" />
                            <option value="Turkmen" />
                            <option value="Ukrainian" />
                            <option value="Urdu" />
                            <option value="Uyghur" />
                            <option value="Uzbek" />
                            <option value="Vietnamese" />
                            <option value="Welsh" />
                            <option value="Xhosa" />
                            <option value="Yiddish" />
                            <option value="Yoruba" />
                            <option value="Zulu" />
                        </datalist>



                        <label for='TextArea' className='label'>Your Text</label>
                        <textarea id='TextArea' rows='5' className='textArea' placeholder='Your text.....' ></textarea>

                        <button type="button" id="submit" name="submit" class="submit" onClick={Download}>Generate Download Link</button>

                      
    


                    </form>


                </div>

            </section>

            <footer>


            </footer>



        </div>

    )
}

export default Home;
