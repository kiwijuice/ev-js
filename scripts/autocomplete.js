window.EVSearch = {};

EVSearch.autoCompleteField = null;

EVSearch.initAutocompleteConfiguration = function() {

    let carData = {};
    carData["DS 3 E-Tense"] = "https://www.evm.co.il/ds3-e-tense-crossback-in-israel/";
    carData["אאודי e-tron"] = "https://www.evm.co.il/audi-e-tron-suv/";
    carData["אאודי Q4"] = "https://www.evm.co.il/audi-q4-e-tron-in-israel/";
    carData["אופל מוקה חשמלית"] = "https://www.evm.co.il/opel-mokka-e-in-israel/";
    carData["אופל קורסה חשמלית"] = "https://www.evm.co.il/opel-corsa-e-in-israel/";
    carData["איוויז U5"] = "https://www.evm.co.il/all-electric-aiways-u5-in-israel/";
    carData["ב.מ.וו i4"] = "https://www.evm.co.il/bmw-i4-in-israel/";
    carData["ב.מ.וו iX"] = "https://www.evm.co.il/bmw-reveals-ix1-suv/";
    carData["ב.מ.וו iX3"] = "https://www.evm.co.il/bmw-ix3-in-israel/";
    carData["גנסיס GV60"] = "https://www.evm.co.il/genesis-gv60-in-israel/";
    carData["גנסיס GV80"] = "https://www.evm.co.il/genesis-electrified-g80-in-israel/";
    carData["וולוו C40"] = "https://www.evm.co.il/volvo-c40-recharge-in-israel/";
    carData["וולוו XC40"] = "https://www.evm.co.il/volvo-xc40-recharge-pure-electric-in-israel/";
    carData["טסלה מודל 3"] = "https://www.evm.co.il/tesla-model-3/";
    carData["טסלה מודל S"] = "https://www.evm.co.il/tesla-model-s/";
    carData["טסלה מודל Y"] = "https://www.evm.co.il/tesla-model-y/";
    carData["יונדאי איוניק 5"] = "https://www.evm.co.il/hyundai-ioniq-5-review/";
    carData["לקסוס UX300e"] = "https://www.evm.co.il/lexus-ux-300e/";
    carData["מקסוס יוניק"] = "https://www.evm.co.il/maxus-euniq-6-in-israel/";
    carData["מרצדס EQA"] = "https://www.evm.co.il/mercedes-eqa-in-israel/";
    carData["מרצדס EQC"] = "https://www.evm.co.il/mercedes-eqc/";
    carData["מרצדס EQE"] = "https://www.evm.co.il/mercedes-eqe-in-israel/";
    carData["סיטרואן C4 חשמלית"] = "https://www.evm.co.il/citroen-ec4-in-israel/";
    carData["סיטרואן ברלינגו חשמלית"] = "https://www.evm.co.il/citroen-e-berlingo-e-jumpy-in-israel/";
    carData["סיטרואן גאמפי חשמלית"] = "https://www.evm.co.il/citroen-e-berlingo-e-jumpy-in-israel/";
    carData["סקודה אניאק"] = "https://www.evm.co.il/skoda-enyaq/";
    carData["פיגו e2008"] = "https://www.evm.co.il/peugeot-e-2008/";
    carData["פיגו e208"] = "https://www.evm.co.il/peugeot-e-208/";
    carData["קיה נירו EV"] = "https://www.evm.co.il/kia-e-niro-in-israel/";

    var autoCompleteConfig = {
        
        placeHolder: "חפש רכב חשמלי...",
        threshold: 0,
        searchEngine: "loose",

        data: {
            src: Object.keys(carData)
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

                    const redirectLink = carData[selection];
                    console.log(redirectLink);
                }
            }
        }
    };

    return autoCompleteConfig;
}

addEventListener('load', (event) => {
    // Initialize the autocomplete for the EV search on the homepage.
    EVSearch.autoCompleteField = new autoComplete(
        EVSearch.initAutocompleteConfiguration()
    );
});

