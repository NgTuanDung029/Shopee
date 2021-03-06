// get api city in Vietnam
//Sample source code: https://codepen.io/sangram143/pen/wvBmZRe
const apiUrl = "https://sheltered-anchorage-60344.herokuapp.com";
const apiEndpointDistrict = apiUrl + '/district/?idProvince=';
const apiEndpointCommune = apiUrl + '/commune/?idDistrict=';

async function getDistrict(idProvince) {
    const { data : districtList } = await axios.get(apiEndpointDistrict + idProvince);
    return districtList
}

async function getCommune(idDistrict){
    const { data : communeList } = await axios.get(apiEndpointCommune + idDistrict);
    return communeList 
}

document.querySelector('#city-province').addEventListener("change", async () => {// get district and town when changing city/province
    document.querySelector('.district-town-select > span').style.display = "block";
    const idProvince = document.querySelector('#city-province').value;
    const districtList = await getDistrict(idProvince) || [];
    let outputDistrict = "<option value='0'>&nbspChọn Quận/Huyện...</option>";
    let outputCommune = "<option value='0'>&nbspChọn Phường/Xã...</option>";
    for (let i = 0; i < districtList.length; i ++){
        if (districtList[i].idProvince === idProvince){
            outputDistrict += `<option value='${districtList[i].idDistrict}'>&nbsp${districtList[i].name}</option>`;
        }
    }
    document.querySelector('#district-town').innerHTML = outputDistrict;
    document.querySelector('#ward-commune').innerHTML = outputCommune;
    document.querySelector('.district-town-select > span').style.display = "none";
})

document.querySelector('#district-town').addEventListener("change", async () => {// get ward and commune when changing district/town
    document.querySelector('.ward-commune-select> span').style.display = "block";
    const idDistrict = document.querySelector('#district-town').value;
    const communeList = await getCommune(idDistrict) || [];
    let outputCommune = "<option value='0'>&nbspChọn Phường/Xã...</option>";
    for (let i = 0; i < communeList.length; i ++){
        if (communeList[i].idDistrict === idDistrict){
            outputCommune += `<option value='${communeList[i].idCommune}'>&nbsp${communeList[i].name}</option>`;
        }
    }
    document.querySelector('#ward-commune').innerHTML = outputCommune;
    document.querySelector('.ward-commune-select > span').style.display = "none";
})


//Incre and Decre goods
const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const increAndDecre = document.querySelector('.incre-and-decre');

//btnAdd disable when increAndDecre is 9
btnAdd.addEventListener('click', () => {
    increAndDecre.value = parseInt(increAndDecre.value) + 1;
    console.log(increAndDecre.value);
});

btnSubtract.addEventListener('click', () => {   
    if (increAndDecre.value > 1){
        increAndDecre.value = parseInt(increAndDecre.value) - 1;
        console.log(increAndDecre.value);
    }
});
