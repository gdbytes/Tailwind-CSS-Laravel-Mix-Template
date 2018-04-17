<?php

/**
 * Helper to read from Laravel Mix's manifest file to load correct asset.
 *
 * @param string $path
 * @param string $folder
 *
 * @return string
 */
function mix($path, $folder = 'assets')
{
    $manifest = rtrim(dirname(__DIR__), '/') . (! empty($folder) ? '/' . trim($folder, '/') : '') . '/mix-manifest.json';

    if (! file_exists($manifest)) {
        return $path;
    }

    $content = json_decode(file_get_contents($manifest), true);

    foreach (['/' . ltrim($path, '/'), $path] as $key) {
        if (isset($content[$key])) {
            return (! empty($folder)  ? '/' . trim($folder, '/') : '') . '/' . ltrim($content[$key], '/');

        }
    }

    return (! empty($folder)  ? '/' . trim($folder, '/') : '') . '/' . ltrim($path, '/');
}
