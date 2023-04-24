 
 import swal from 'sweetalert';

 function Download(){


    let textArea=document.getElementById("TextArea")
   
    let languageSelected = document.getElementById("language")
 
    let languages = {"Afrikaans" : "af",
                     "Albanian" : "sq",
                     "Amharic" : "am",
                     "Arabic" : "ar",
                     "Armenian" : "hy",
                     "Azerbaijani" : "az",
                     "Basque" : "eu",
                     "Belarusian" : "be",
                     "Bengali" : "bn",
                     "Bosnian" : "bs",
                     "Bulgarian" : "bg",
                     "Catalan" : "ca",
                     "Cebuano" : "ceb",
                     "Chichewa" : "ny",
                     "Chinese (Simplified)" : "zh-CN",
                     "Chinese (Traditional)" : "zh-TW",
                     "Corsican" : "co",
                     "Croatian" : "hr",
                     "Czech" : "cs",
                     "Danish" : "da",
                     "Dutch" : "nl",
                     "English" : "en",
                     "Esperanto" : "eo",
                     "Estonian" : "et",
                     "Filipino" : "tl",
                     "Finnish" : "fi",
                     "French" : "fr",
                     "Frisian" : "fy",
                     "Galician" : "gl",
                     "Georgian" : "ka",
                     "German" : "de",
                     "Greek" : "el",
                     "Gujarati" : "gu",
                     "Haitian Creole" : "ht",
                     "Hausa" : "ha",
                     "Hawaiian" : "haw",
                     "Hebrew" : "iw",
                     "Hindi" : "hi",
                     "Hmong" : "hmn",
                     "Hungarian" : "hu",
                     "Icelandic" : "is",
                     "Igbo" : "ig",
                     "Indonesian" : "id",
                     "Irish" : "ga",
                     "Italian" : "it",
                     "Japanese" : "ja",
                     "Javanese" : "jw",
                     "Kannada" : "kn",
                     "Kazakh" : "kk",
                     "Khmer" : "km",
                     "Kinyarwanda" : "rw",
                     "Korean" : "ko",
                     "Kurdish (Kurmanji)" : "ku",
                     "Kyrgyz" : "ky",
                     "Lao" : "lo",
                     "Latin" : "la",
                     "Latvian" : "lv",
                     "Lithuanian" : "lt",
                     "Luxembourgish" : "lb",
                     "Macedonian" : "mk",
                     "Malagasy" : "mg",
                     "Malay" : "ms",
                     "Malayalam" : "ml",
                     "Maltese" : "mt",
                     "Maori" : "mi",
                     "Marathi" : "mr",
                     "Mongolian" : "mn",
                     "Myanmar (Burmese)" : "my",
                     "Nepali" : "ne",
                     "Norwegian" : "no",
                     "Odia (Oriya)" : "or",
                     "Pashto" : "ps",
                     "Persian" : "fa",
                     "Polish" : "pl",
                     "Portuguese" : "pt",
                     "Punjabi" : "pa",
                     "Romanian" : "ro",
                     "Russian" : "ru",
                     "Samoan" : "sm",
                     "Scots Gaelic" : "gd",
                     "Serbian" : "sr",
                     "Sesotho" : "st",
                     "Shona" : "sn",
                     "Sindhi" : "sd",
                     "Sinhala" : "si",
                     "Slovak" : "sk",
                     "Slovenian" : "sl",
                     "Somali" : "so",
                     "Spanish" : "es",
                     "Sundanese" : "su",
                     "Swahili" : "sw",
                     "Swedish" : "sv",
                     "Tajik" : "tg",
                     "Tamil" : "ta",
                     "Tatar" : "tt",
                     "Telugu" : "te",
                     "Thai" : "th",
                     "Turkish" : "tr",
                     "Turkmen" : "tk",
                     "Ukrainian" : "uk",
                     "Urdu" : "ur",
                     "Uyghur" : "ug",
                     "Uzbek" : "uz",
                     "Vietnamese" : "vi",
                     "Welsh" : "cy",
                     "Xhosa" : "xh",
                     "Yiddish" : "yi",
                     "Yoruba" : "yo",
                     "Zulu" : "zu"
                    };
    if (languageSelected != null){
        let langCode = languages[languageSelected.value];

       let copyLink="https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=" + langCode + "&q=" + textArea.value 
      
     

    

       navigator.clipboard.writeText(copyLink);
      
       document.getElementById('submit').innerHTML="Copied to the Clipboard"
       document.getElementById('submit').style.backgroundColor='red'
  
      

        setTimeout(function() {
            document.getElementById('submit').innerHTML="Generate Download Link"
           
            document.getElementById('submit').style.backgroundColor='green'

          }, 5000);
console.log(languageSelected)
          if (languageSelected ===undefined){
            swal({
                title: "Select the language",
                icon: "warning",
              });
          }

          swal({
            title: "Copied to the Clipboard!",
            text: "Open the link in a new tab and download the text-to-speech sound!",
            icon: "success",
            timer: 9000,
          });
        

        }

    

 

}

export default Download