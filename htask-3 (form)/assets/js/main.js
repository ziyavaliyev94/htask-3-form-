const form = document.getElementById('signup-form');

form.addEventListener('submit', getForm);

function getForm(e) {
    e.preventDefault();

    let ad = document.getElementById('ad').value;
    let soyad = document.getElementById('soyad').value;
    let email = document.getElementById('email').value;
    let sifre = document.getElementById('sifre').value;
    let gün = document.getElementById('gün').value;
    let ay = document.getElementById('ay').value;
    let il = document.getElementById('il').value;
    let cinsiyet = document.querySelector('input[name="cinsiyet"]:checked')?.value;

    let personData = {
        ad: ad,
        soyad: soyad,
        email: email,
        sifre: sifre,
        doğumTarixi: {
            gün: gün,
            ay: ay,
            il: il
        },
        cinsiyet: cinsiyet
    };

    console.log(personData);
    form.reset()
}
