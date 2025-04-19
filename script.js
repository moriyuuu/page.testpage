// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ヘッダーの透明度制御
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.header');

    if (currentScroll <= 0) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        return;
    }

    if (currentScroll > lastScroll) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    }

    lastScroll = currentScroll;
});

// 商品カードのホバーエフェクト
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// スライダー機能
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.slider-track');

function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

// 商品詳細モーダル
const modal = document.getElementById('product-modal');
const modalBody = modal.querySelector('.modal-body');

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productInfo = {
            title: card.querySelector('h3').textContent,
            description: card.querySelector('p').textContent,
            price: card.querySelector('.price').textContent
        };
        
        modalBody.innerHTML = `
            <h2>${productInfo.title}</h2>
            <div class="product-image"></div>
            <p>${productInfo.description}</p>
            <p class="price">${productInfo.price}</p>
            <div class="product-details">
                <h3>商品詳細</h3>
                <ul>
                    <li>素材：高品質な天然素材</li>
                    <li>サイズ：W800 × D800 × H700mm</li>
                    <li>カラー：ナチュラル / ブラウン / ホワイト</li>
                    <li>納期：約2週間</li>
                </ul>
            </div>
            <button class="cta-button">購入する</button>
        `;
        
        modal.style.display = 'block';
    });
});

document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// お問い合わせフォーム
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // ここに実際の送信処理を実装
    alert('お問い合わせありがとうございます。\n内容を確認次第、ご連絡させていただきます。');
    form.reset();
});

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .section-title, .concept-text').forEach(el => {
    observer.observe(el);
});

// モバイルメニュー
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
}); 