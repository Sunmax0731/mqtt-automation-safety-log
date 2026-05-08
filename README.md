# mqtt-automation-safety-log

自動化ルール・MQTT・安全運用ログ の closed alpha prototype。ホームオートメーションのルール、MQTT/APIゲートウェイ、危険操作セーフモード、自動化ログ、再実行キューをまとめる。

## Status

- Version: 0.1.0-alpha.1
- Rank: 55 / P2 / Score 54
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
