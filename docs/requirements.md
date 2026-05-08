# 要件定義

- Repo: `mqtt-automation-safety-log`
- Domain: IoT
- Rank: 55 / P2 / Score 54
- Idea No: 6
- アイデア名: 自動化ルール・MQTT・安全運用ログ
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 背景
ホームオートメーションのルール、MQTT/APIゲートウェイ、危険操作セーフモード、自動化ログ、再実行キューをまとめる。

## 課題
自動化が増えると、失敗理由、権限、危険操作、再実行条件が見えにくくなる。

## closed alpha要件
- LAN simulator, mock device, CLI, and web dashboardとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
