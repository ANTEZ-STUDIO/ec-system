import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <h3>SAMPLE Storeとは</h3>
        <p>話題のトレンドや最新テクノロジーを取り入れた商品を皆さまにご提供します。</p>
      </div>

      <div>
        <h3>クイックリンク</h3>
        <ul>
          <li><Link href="/privacy">プライバシーポリシー</Link></li>
          <li><Link href="/terms">利用規約</Link></li>
        </ul>
      </div>

      <div>
        <h3>お問い合わせ</h3>
        <p><Link href="/contact">ご質問・ご相談はこちら</Link></p>
        <div>
          <Image
            src="/icons/facebook-icon.png"
            alt="Facebook"
            width={24} height={24}
            style={{ width: '24px', height: '24px' }}
          />
          <Image
            src="/icons/x-icon.svg"
            alt="X"
            width={24} height={24}
            style={{ width: '24px', height: '24px' }}
          />
          <Image
            src="/icons/youtube-icon.svg"
            alt="YouTube"
            width={24} height={24}
            style={{ width: '24px', height: '24px' }}
          />
        </div>
      </div>

      <div>
        <p>&copy; {currentYear} SAMPLE Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
