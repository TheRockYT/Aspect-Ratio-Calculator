// EVENTS
document.getElementById("a_input_1").addEventListener('change', () => {
    // ASPECT ARTIO INPUT 1 CHANGE
    setValue("ratio", "a_custom");
    calculateFromRatio(false);
})
document.getElementById("a_input_2").addEventListener('change', () => {
    // ASPECT ARTIO INPUT 2 CHANGE
    setValue("ratio", "a_custom");
    calculateFromRatio(false);
})
document.getElementById("c_input_1").addEventListener('change', () => {
    // CROPFACTOR CHANGE
    setValue("ratio", "a_custom");
    setValue("a_input_1", getValue("c_input_1")); // SET THE ASPECT ARTIO INPUT 1
    setValue("a_input_2", 1); // SET THE ASPECT ARTIO INPUT 2 (always 1)
    calculateFromRatio(false);
})
document.getElementById("p_input_1").addEventListener('change', () => {
    // PIXELS INPUT 1 CHANGE
    setValue("pixels", "p_custom");
    calculateFromRatio(false);
})
document.getElementById("p_input_2").addEventListener('change', () => {
    // PIXELS INPUT 2 CHANGE
    setValue("pixels", "p_custom");
    calculateFromRatio(true);
})


document.getElementById("ratio").addEventListener('change', () => {
    matchRatio();
})
document.getElementById("pixels").addEventListener('change', () => {
    matchPixels();
})

// MATCH
function matchRatio() {
    switch(getValue("ratio")) {
        case "a_1_33":
            setValue("a_input_1", 4);
            setValue("a_input_2", 3);
            break;
        case "a_1_78":
            setValue("a_input_1", 16);
            setValue("a_input_2", 9);
            break;
        case "a_1_85":
            setValue("a_input_1", 1.85);
            setValue("a_input_2", 1);
            break;
        case "a_1_90":
            setValue("a_input_1", 1.90);
            setValue("a_input_2", 1);
            break;
        case "a_2_00":
            setValue("a_input_1", 2);
            setValue("a_input_2", 1);
            break;
        case "a_2_33":
            setValue("a_input_1", 21);
            setValue("a_input_2", 9);
            break;
        case "a_2_35":
            setValue("a_input_1", 2.35);
            setValue("a_input_2", 1);
            break;
        case "a_2_37":
            setValue("a_input_1", 2.37);
            setValue("a_input_2", 1);
            break;
        case "a_2_39":
            setValue("a_input_1", 2.39);
            setValue("a_input_2", 1);
            break;
        case "a_custom":
            calculateFromRatio(false);
            return;
        default:
            setValue("a_input_1", -1);
            setValue("a_input_2", -1);
    }
    calculateFromRatio(false);
}
function matchPixels() {
    switch(getValue("pixels")) {
        case "p_8k_native":
            setValue("p_input_1", 8192);
            break;
        case "p_8k_uhd":
            setValue("p_input_1", 7680);
            break;
        case "p_6k_native":
            setValue("p_input_1", 6144);
            break;
        case "p_5k_native":
            setValue("p_input_1", 5120);
            break;
        case "p_4k_native":
            setValue("p_input_1", 4096);
            break;
        case "p_4k_uhd":
            setValue("p_input_1", 3840);
            break;
        case "p_3k_native":
            setValue("p_input_1", 3072);
            break;
        case "p_3k_uhd":
            setValue("p_input_1", 2880);
            break;
        case "p_2k_native":
            setValue("p_input_1", 2048);
            break;
        case "p_1080p_native":
            setValue("p_input_1", 1920);
            break;
        case "p_720p_native":
            setValue("p_input_1", 1080);
            break;
        case "p_480p_native":
            setValue("p_input_1", 852);
            break;
        case "p_360p_native":
            setValue("p_input_1", 640);
            break;
        case "p_240p_native":
            setValue("p_input_1", 426);
            break;
        case "p_144p_native":
            setValue("p_input_1", 256);
            break;
        case "p_custom":
            calculateFromRatio(false);
            return;
        default:
            setValue("p_input_1", -1);
    }
    calculateFromRatio(false);
}

// CALCULATE
function calculateFromRatio(x) {
    var ratio = getValue("a_input_1") / getValue("a_input_2");
    setValue("c_input_1", ratio);
    if(x){
        setValue("p_input_1", Math.round(getValue("p_input_2") * ratio));
    }else{
        setValue("p_input_2", Math.round(getValue("p_input_1") / ratio));
    }
}

// GETTERS & SETTERS
function setValue(id, valueToSet) {    
    let element = document.getElementById(id);
    element.value = valueToSet;
}
function getValue(id) {    
    let element = document.getElementById(id);
    return element.value;
}

// STARTUP
matchRatio();
matchPixels();
calculateFromRatio(false);
