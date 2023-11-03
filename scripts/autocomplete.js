window.EVSearch = {};


/**
 * The autocomplete object represent the EV search field.
 */
EVSearch.autoCompleteField = null;

/**
 * Initializes the JSON config object required for the EV search autocomplete.
 * @returns A JSON config object.
 */
EVSearch.initAutocompleteConfiguration = function() {

    let evPagesMap = EVSearch.getEvPagesMap();

    var autoCompleteConfig = {
        
        selector: '#evSearchAutoComplete',
        placeHolder: "חפש רכב חשמלי...",
        threshold: 0,
        searchEngine: "loose",

        data: {
            src: Object.keys(evPagesMap)
        },

        resultItem: {
            highlight: true,
        },

        query: (input) => {
            // When searching items, ignore apostrophes
            return input.replace("׳", "").replace("'", "");
        },

        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    EVSearch.autoCompleteField.input.value = selection;

                    const redirectLink = evPagesMap[selection];
                    console.log(redirectLink);
                }
            }
        }
    };

    return autoCompleteConfig;
}

/**
 * Returns a map that holds the EV names as the keys, and the EV page urls as the map values.
 * @returns A map with the EV names and their URLs in EV Magazine.
 */
EVSearch.getEvPagesMap = function() {
    const evData = [["DS 3 E-Tense", "https://www.evm.co.il/ds3-e-tense-crossback-in-israel/"], ["אאודי e-tron", "https://www.evm.co.il/audi-e-tron-suv/"], ["אאודי Q4", "https://www.evm.co.il/audi-q4-e-tron-in-israel/"], ["אופל מוקה חשמלית", "https://www.evm.co.il/opel-mokka-e-in-israel/"], ["אופל קורסה חשמלית", "https://www.evm.co.il/opel-corsa-e-in-israel/"], ["איוויז U5", "https://www.evm.co.il/all-electric-aiways-u5-in-israel/"], ["ב.מ.וו i4", "https://www.evm.co.il/bmw-i4-in-israel/"], ["ב.מ.וו iX", "https://www.evm.co.il/bmw-reveals-ix1-suv/"], ["ב.מ.וו iX3", "https://www.evm.co.il/bmw-ix3-in-israel/"], ["גנסיס GV60", "https://www.evm.co.il/genesis-gv60-in-israel/"], ["גנסיס GV80", "https://www.evm.co.il/genesis-electrified-g80-in-israel/"], ["וולוו C40", "https://www.evm.co.il/volvo-c40-recharge-in-israel/"], ["וולוו XC40", "https://www.evm.co.il/volvo-xc40-recharge-pure-electric-in-israel/"], ["טסלה מודל 3", "https://www.evm.co.il/tesla-model-3/"], ["טסלה מודל S", "https://www.evm.co.il/tesla-model-s/"], ["טסלה מודל Y", "https://www.evm.co.il/tesla-model-y/"], ["יונדאי איוניק 5", "https://www.evm.co.il/hyundai-ioniq-5-review/"], ["לקסוס UX300e", "https://www.evm.co.il/lexus-ux-300e/"], ["מקסוס יוניק", "https://www.evm.co.il/maxus-euniq-6-in-israel/"], ["מרצדס EQA", "https://www.evm.co.il/mercedes-eqa-in-israel/"], ["מרצדס EQC", "https://www.evm.co.il/mercedes-eqc/"], ["מרצדס EQE", "https://www.evm.co.il/mercedes-eqe-in-israel/"], ["סיטרואן C4 חשמלית", "https://www.evm.co.il/citroen-ec4-in-israel/"], ["סיטרואן ברלינגו חשמלית", "https://www.evm.co.il/citroen-e-berlingo-e-jumpy-in-israel/"], ["סיטרואן גאמפי חשמלית", "https://www.evm.co.il/citroen-e-berlingo-e-jumpy-in-israel/"], ["סקודה אניאק", "https://www.evm.co.il/skoda-enyaq/"], ["פיגו e2008", "https://www.evm.co.il/peugeot-e-2008/"], ["פיגו e208", "https://www.evm.co.il/peugeot-e-208/"], ["קיה נירו EV", "https://www.evm.co.il/kia-e-niro-in-israel/"]];
    let evPagesMap = {};

    evData.forEach(item => evPagesMap[item[0]] = item[1]);
    return evPagesMap;
};

addEventListener('load', (event) => {
    if (jQuery('#evSearchAutoComplete').length) {
        // Initializes the autocomplete for the EV search on the homepage.
        EVSearch.autoCompleteField = new autoComplete(
            EVSearch.initAutocompleteConfiguration()
        );
    }
});
