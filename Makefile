
SRCS = 	src/webasm/create_buffer.c \
		src/webasm/rt/rt.c \
		src/webasm/rt/utils.c \
		src/webasm/rt/vec3.c \
		src/webasm/rt/sphere.c \
		src/webasm/rt/scene.c \
		src/webasm/rt/camera.c

src/webasm/rt.mjs: ${SRCS}
	emcc --no-entry ${SRCS} -o src/webasm/rt.mjs  \
	  -s ENVIRONMENT='web'  \
	  -s SINGLE_FILE=1  \
	  -s EXPORT_NAME='createModule'  \
	  -s USE_ES6_IMPORT_META=0  \
	  -s EXPORTED_FUNCTIONS='["_rt", "_create_buffer", "_malloc", "_free"]'  \
	  -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'  \
	  -s EXTRA_EXPORTED_RUNTIME_METHODS=['UTF8ToString'] \
	  -O3