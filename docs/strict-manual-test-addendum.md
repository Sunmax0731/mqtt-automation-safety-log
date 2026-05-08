# 厳格手動テスト追補

- Repo: `mqtt-automation-safety-log`
- Domain: IoT
- Rank: 55 / P2 / Score 54
- Idea No: 6
- アイデア名: 自動化ルール・MQTT・安全運用ログ
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 状態
Codex側では手動テスト未実施。

## 追加確認
1. `npm test`後にvalidationとweb-smoke resultを確認する。
2. `npm run serve -- --port 4173`で画面を開く。
3. 主要操作を3回実行し状態変化を確認する。
4. security/privacy checklistの手動確認待ちを確認する。
5. release asset 3件を確認する。
