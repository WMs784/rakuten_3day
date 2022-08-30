import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {  useState, useEffect, useCallback, memo } from "react";

const Result = memo(() => {
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);

  const rouletteContents1 = [
    "富士山",
    "ディズニーランド",
    "マクドナルド札幌店",
    "東京駅",
    "読売らんど",
    "お台場",
    "駒場東大前駅",
    "沖ノ鳥島"
  ];

  const rouletteContents2 = [
    "東京ドーム",
    "佐賀空港",
    "択捉島",
    "鎌倉",
    "葛西臨海公園",
    "楽天本社",
    "富岡製糸場",
    "ラーメン二郎三田本店",
    "鴨川シーワールド"
  ];

  //ボタンの文言を変更する処理
  const startRoulette = useCallback(() => {
    setStart(!start);
  }, [start]);

  //ルーレットを回す処理
  useEffect(() => {
    if (!start) {
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          if (oldIndex < rouletteContents1.length - 1) return oldIndex + 1;
          return 0;
        });
      }, 50);//ルーレットの中身を切り替える速度
      return () => clearInterval(interval);
    } else if (start) {
      return () => clearInterval();
    }
  }, [start]);

  return (
    <>
      <div>
        <p>行き先は・・・</p>
        <p>{rouletteContents1[index]}</p>
        <p>{rouletteContents2[index]}</p>
      </div>
      <button type="button" onClick={startRoulette}>
        {start ? "スタート" : "ストップ"}
      </button>
    </>
  );
});

export default Result