export const convert_into_base64 = (file, func) => {
    const reader = new FileReader();

    reader.onload = function (event) {
        const base64String = event.target.result;
        // console.log("Base64:", base64String.split(",")[1]);
        if (func) {
            func(base64String);
        }
        // You can use this base64String as needed
    };

    reader.onerror = function (event) {
        console.error("File could not be read! Code " + event.target.error.code);
    };

    reader.readAsDataURL(file);
};