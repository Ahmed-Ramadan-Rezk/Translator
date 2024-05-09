const fromTextArea = document.querySelector('.from');
const toTextArea = document.querySelector('.to');
const selectionField = document.querySelectorAll('select');

selectionField.forEach((selectTag, index) => {
    for(languageCode in languages) {
        let selected;
        if(index == 0 && languageCode == "en-GB") {
            selected = "selected"
        } else if(index == 1 && languageCode == "ar-SA") {
            selected = "selected"
        }
        let option = `<option value="${languageCode}" ${selected}>${languages[languageCode]}</option>`;
        selectTag.insertAdjacentHTML("beforeend", option);
    }
});

fromTextArea.addEventListener('keyup', function() {

    let textToTranslate = selectionField[0].value;
    let translatedText = selectionField[1].value;

    let translationAPI = `https://api.mymemory.translated.net/get?q=${this.value}&langpair=${textToTranslate}|${translatedText}`;
    fetch(translationAPI).then(res => res.json()).then(data => {
        toTextArea.value = data.responseData.translatedText;
    })
})
