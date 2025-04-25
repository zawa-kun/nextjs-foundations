import { Inter, Lusitana } from 'next/font/google' // font をダウンロード出来るモジュール

export const inter = Inter({ subsets: ['latin']}); // latin をダウンロード

export const lusitana = Lusitana(
    {
        weight: ['400', '700'],
        subsets: ['latin'],
});
