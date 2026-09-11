document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-pemesanan');

    if (form) {
        form.addEventListener('submit', function(event) {
            const nama = document.getElementById('nama').value.trim();
            const nohp = document.getElementById('nohp').value.trim();
            const alamat = document.getElementById('alamat').value.trim();
            const menu = document.getElementById('menu').value;
            const jumlah = document.getElementById('jumlah').value;

            // Validasi Sederhana
            if(nama === "") {
                alert("Nama wajib diisi!");
                event.preventDefault();
                return;
            }

            if(nohp === "") {
                alert("Nomor HP wajib diisi!");
                event.preventDefault();
                return;
            }
            
            if(alamat === "") {
                alert("Alamat pengiriman wajib diisi!");
                event.preventDefault();
                return;
            }

            if(menu === "") {
                alert("Silakan pilih menu terlebih dahulu!");
                event.preventDefault();
                return;
            }

            if(jumlah === "" || jumlah < 1) {
                alert("Jumlah porsi minimal 1!");
                event.preventDefault();
                return;
            }
            
            // Notifikasi sukses sebelum form dikirim/pindah halaman
            alert("Pesanan berhasil dikirim, " + nama + "! Terima kasih sudah memesan.");
        });
    }
});