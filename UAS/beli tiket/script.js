// script.js

let transaksi = [];
let totalTransaksi = 0;

function tampilkanFormPemesanan() {
    document.getElementById('formPemesanan').style.display = 'block';
}

function buatPemesanan() {
    const namaPembeli = document.getElementById('namaPembeli').value;
    const jumlahTiket = parseInt(document.getElementById('jumlahTiket').value);
    const jenisTiket = document.getElementById('jenisTiket').value;

    if (namaPembeli && !isNaN(jumlahTiket) && jumlahTiket > 0) {
        let hargaTiket = 0;

        // Tentukan harga tiket berdasarkan jenis tiket
        if (jenisTiket === 'vip') {
            hargaTiket = 100; // Harga tiket VIP (contoh)
        } else if (jenisTiket === 'reguler') {
            hargaTiket = 50; // Harga tiket Reguler (contoh)
        }

        const totalHarga = jumlahTiket * hargaTiket;

        transaksi.push({ namaPembeli, jumlahTiket, jenisTiket, totalHarga });
        totalTransaksi += totalHarga;

        updateDaftarTransaksi();
        resetFormPemesanan();
    } else {
        alert('Isi formulir dengan benar.');
    }
}

function updateDaftarTransaksi() {
    const daftarTransaksiElement = document.getElementById('daftarTransaksi');
    daftarTransaksiElement.innerHTML = '';

    transaksi.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.namaPembeli}: ${item.jumlahTiket} tiket (${item.jenisTiket}) - Total: $${item.totalHarga}`;
        daftarTransaksiElement.appendChild(li);
    });

    const totalElement = document.createElement('li');
    totalElement.textContent = `Total Transaksi: $${totalTransaksi}`;
    daftarTransaksiElement.appendChild(totalElement);
}

function resetFormPemesanan() {
    document.getElementById('namaPembeli').value = '';
    document.getElementById('jumlahTiket').value = '';
    document.getElementById('jenisTiket').value = 'vip'; // Reset jenis tiket ke VIP
    document.getElementById('formPemesanan').style.display = 'none';
}

function tampilkanTransaksiAdmin() {
    const transaksiAdminElement = document.getElementById('transaksiAdmin');
    transaksiAdminElement.innerHTML = '';

    transaksi.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.namaPembeli}: ${item.jumlahTiket} tiket (${item.jenisTiket}) - Total: $${item.totalHarga}`;
        transaksiAdminElement.appendChild(li);
    });

    const totalElement = document.createElement('li');
    totalElement.textContent = `Total Transaksi: $${totalTransaksi}`;
    transaksiAdminElement.appendChild(totalElement);

    document.getElementById('adminPage').style.display = 'block';
}
