## DEBIAN files
> allowed characters are `lowercase alphanums` or `-+.`
```bash
mkdir -p my-package/DEBIAN
cat <<EOF > my-package/DEBIAN/control
Package: my-package
Version: 1.0
Section: custom
Priority: optional
Architecture: all
Essential: no
Installed-Size: 1024
Maintainer: Asim
Description: Print hello from my program on the screen
EOF
```


## program
```bash
mkdir -p my-package/usr/bin/
cat <<EOF > my-package/usr/bin/my-program
echo 'hello from my program'
EOF

chmod +x my-package/usr/bin/my-program
```

## build the package
```bash
dpkg-deb --build my-package
```
> `mv my-package.deb my-package_1.0_amd64.deb`


## tree
```text
.
├── my-package
│   ├── DEBIAN
│   │   └── control
│   └── usr
│       └── bin
│           └── my-program
└── my-package.deb
```


## install the package
```bash
sudo apt install ./my-package.deb
# OR
sudo dpkg -i        my-package.deb
sudo dpkg --install my-package.deb

which my-program

my-program
# hello from my program

sudo apt remove my-package
```
