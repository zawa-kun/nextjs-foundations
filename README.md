# nextjs-foundations


## ストリーミング
loading.tsx ページ全体
DashboardSkelton 読み込み中にスケルトンの枠組が表示される
<Suspense/>　コンポーネントごと

サスペンスとデータ取得を扱う際、データ取得はデータを必要とするコンポーネントまで遡る。


## 部分的な事前レンダリング
next.config.ts
```TypeScript
const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental' // ppr部分的な事前レンダリングー＞有効
  }
};
```
ｐｐｒを有効にしたいルートのlayout.tsx
```TypeScript
export const experimental_ppr = true;
```

## ＵＲＬ検索パラメータ
[利点]
- 検索パラメータはＵＲＬに含まれているので、検索クエリやフィルター等等のアプリのその時の状態のまま、ブックマークしたり、共有したりする事が出来る。
- サーバーレンダリングの処理が簡単になる。

## ページネーション
