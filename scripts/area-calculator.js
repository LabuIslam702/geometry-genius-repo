function calculatorTriangleArea(){
    // base triangle set
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // height trianle vale

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    
    baseField.value = '';
    heightField.value = '';
}  

function calculatorRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);
    
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    const rectangleArea = width * length;
    console.log(rectangleArea);
    
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = rectangleArea;

    widthField.value = '';
    lengthField.value = '';
}
