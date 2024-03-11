import './HomePage.css'; 
export function Home(){
    return (
        <div>
        <header>
            <h1>Okul Duyuru Sayfası</h1>
            <p>Öğrenci ve velilere yönelik güncel bilgiler</p>
        </header>

        <section>
            <h2>Önemli Duyurular</h2>
            <p>Yaklaşan etkinlikler, sınav tarihleri, tatil günleri gibi önemli bilgiler.</p>

            <h2>Haber ve Etkinlikler</h2>
            <p>Okuldaki son haberler, etkinlikler ve başarılar hakkında bilgiler.</p>

            {/* Diğer bölümler buraya eklenebilir */}
        </section>

        <footer>
            <p>İletişim bilgileri ve sosyal medya bağlantıları</p>
        </footer>
    </div>
    );

}