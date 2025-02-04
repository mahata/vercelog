# What is this?

It's a personal blog service by @mahata. It's served at [https://vercelog.mahata.org](https://vercelog.mahata.org/)

## Tweak it locally

It's nice to make sure your change doesn't break anything. The best way to do this is to set up a local pre-commit hook like this:

```
mkdir -p .git/hooks
echo "make pre-commit" > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```
