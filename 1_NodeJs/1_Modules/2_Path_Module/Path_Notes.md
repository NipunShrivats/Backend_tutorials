<!-- Path Module -->

1. It provides utilities for workoing with file and directory paths.
2. It's a built in module, so you don't need to install.

<!-- special NodeJS Constants -->

<!-- 1. "__filename" -->

provides the absolute path of the currently executing file

<!-- 2. "__dirname" -->

Provieds the absolute directory path of the currently executing file.

// Note - Only Availabe in CommanJS

<!-- -------------------------------------------- -->

<!-- Path Module Methods -->

1. "path.join()": joins multiple path segments into one, using the appropriate seperator("\" in windows, "/" in Linux & macOS).

2. "path.parse()": returns an object with details about a given path, including root, dir,base,ext and name

3. "path.resolve()": Resolve a sequence of paths into an absolute path, starting from the current directory.

4. "path.extname()": Extracts the file extension from a given path

5. "path.basename()": Returns the last part of a path(e.g file name with extension)

6. "path.dirname()": Returns the directory part of the path.

7. "path.sep": returns the platform-specific segment seperator(\ for windows,/for Linux & macOS).
