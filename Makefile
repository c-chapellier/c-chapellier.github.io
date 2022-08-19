src/webasm/rt.mjs: src/webasm/rt.c
	emcc --no-entry src/webasm/rt.c -o src/webasm/rt.mjs  \
	  -s ENVIRONMENT='web'  \
	  -s SINGLE_FILE=1  \
	  -s EXPORT_NAME='createModule'  \
	  -s USE_ES6_IMPORT_META=0  \
	  -s EXPORTED_FUNCTIONS='["_rt", "_create_buffer", "_malloc", "_free"]'  \
	  -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'  \
	  -s EXTRA_EXPORTED_RUNTIME_METHODS=['UTF8ToString'] \
	  -O3