srcdir="home/Desktop/Covid-Wep-App-IPRO"
dstdir="var/www/html"

git pull

for srcfile in ${srcdir}/*
do
    cp $srcfile $dstdir/$dstfile
done
