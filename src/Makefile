
antilytics: 

clean:
	rm -rf dist
	rm antilytics.xpi

dist: devel
	mkdir dist && \
	cp -r devel/* dist/ && \
	cd dist/chrome && \
	jar -cfv antilytics.jar * && \
	rm -rf content skin locale && \
	cd .. && \
	sed -i 's/\/\.\//\/antilytics.jar!\//' chrome.manifest && \
	zip antilytics.xpi * && \
	cd .. && \
	cp dist/antilytics.xpi .
