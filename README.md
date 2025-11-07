# alexa-cookie-jp

Amazonのjpアカウントで、[node-red-contrib-alexa-remote2-applestrudel](https://github.com/bbindreiter/node-red-contrib-alexa-remote2-applestrudel)を利用するための認証情報を設定する方法です。

現在はNode-REDのUIで認証できるため、このスクリプトは不要になりました。

## 設定方法

### Home Assistant Community Add-on: Node-RED

Alexa Accountノードの設定を下記の通り設定します。

| name         | value                            |
| ------------ | -------------------------------- |
| Auth Method  | Proxy                            |
| Service Host | alexa.amazon.co.jp               |
| Page         | amazon.co.jp                     |
| File Path    | /homeassistant/alexa-cookie.json |

Home AssistantアドオンのFile editorを使い、`homeassistant/`に`alexa-cookie.json`を配置します。

### Docker Node-RED

Alexa Accountノードの設定を下記の通り設定します。

| name         | value                   |
| ------------ | ----------------------- |
| Auth Method  | Proxy                   |
| Service Host | alexa.amazon.co.jp      |
| Page         | amazon.co.jp            |
| File Path    | /data/alexa-cookie.json |

マウントした`/data`ディレクトリに、`alexa-cookie.json`を配置します。

## 関連リンク

- [認証情報を削除](https://www.amazon.co.jp/hz/mycd/digital-console/devicedetails?deviceFamily=ALEXA_APP)
