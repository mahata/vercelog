---
title: 'SadServers - "Saint John" の解説'
date: '2023-01-10'
---

[SadServers](https://sadservers.com/) というウェブサービスがある。トップページには **"Like LeetCode for Linux"** と書かれている。ここでは Linux サーバーのトラブルシュートを楽しめる。ユーザーには一時的に接続できる Ubuntu サーバーが与えられ、ブラウザで動くターミナルで与えられた環境のトラブルシュートをする。[GitHub](https://github.com/fduran/sadservers) では SadServers のアーキテクチャが説明されており、なかなか面白い構成になっている。

いくつか SadServers で出題される問題について解説してみよう。まず、この記事では ["Saint John": what is writing to this log file?](https://sadservers.com/newserver/saint-john) という問題について見る。要約すると `/var/log/bad.log` にログデータが出力され続けており、ディスクが溢れると困るので、ファイルに書き込みをしているプロセスを止めましょう、というお題だ。

あるファイルを開いているプロセスを探したいときは `lsof` を使うと良い。`lsof` には色々な機能があるが、このケースではファイル名をコマンドライン引数として渡すことで次のような結果が得られる。

```
$ sudo lsof /var/log/bad.log
COMMAND   PID   USER   FD   TYPE DEVICE SIZE/OFF  NODE NAME
badlog.py 613 ubuntu    3w   REG  259,1    16206 67701 /var/log/bad.log
```

幸運なことに `/var/log/bad.log` を開いている `badlog.py` を発見することができた。次はこの Python スクリプトのプロセスIDを調べたい。これは `ps` コマンドの出力を見ればわかる。

```
$ ps aux | grep badlog.py
ubuntu 613 0.0 1.9 17672 8900 ? S 05:41 0:00 /usr/bin/python3 /home/ubuntu/badlog.py
ubuntu 1182 0.0 0.4 7008 2200 pts/0 R+ 05:45 0:00 grep --color=auto badlog.py
```

上記の結果から、プロセスID `613` が `/usr/bin/python3 /home/ubuntu/badlog.py` で立ち上げられたプロセスのようだ。

このプロセスを止めるには `kill` コマンドを使う。`kill` コマンドにプロセス番号を与えてみよう。

```
$ kill 613
$ ubuntu@ip-172-31-32-108:/$ ps aux | grep badlog.py
ubuntu      1185  0.0  0.4   7008  2248 pts/0    R+   05:46   0:00 grep --color=auto badlog.py
```

`kill 613` を実行した後で再度 `ps` すると該当プロセスは見当たらない。これでトラブルシュートは完了である。

なお `kill` コマンドはデフォルトでは `SIGTERM` シグナルを発行する。[もし SIGTERM でコマンドを削除できない場合は SIGKILL などを使う必要がある](https://manned.org/kill)。
