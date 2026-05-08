export const productProfile = {
  "repo": "mqtt-automation-safety-log",
  "title": "自動化ルール・MQTT・安全運用ログ",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 55,
  "tier": "P2",
  "score": 54,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "ホームオートメーションのルール、MQTT/APIゲートウェイ、危険操作セーフモード、自動化ログ、再実行キューをまとめる。",
  "problem": "自動化が増えると、失敗理由、権限、危険操作、再実行条件が見えにくくなる。",
  "differentiation": "家庭内利用に必要な安全確認と再実行履歴を、自動化ルールと同じ画面に置く。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
