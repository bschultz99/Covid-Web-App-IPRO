cd home/covid19webapp/Desktop/Covid-Wep-App-IPRO
git pull
cd ../../../../

srcdir="home/covid19webapp/Desktop/Covid-Wep-App-IPRO"
dstdir="var/www/html"

for srcfile in ${srcdir}/*
do
    cp $srcfile $dstdir/$dstfile
done
