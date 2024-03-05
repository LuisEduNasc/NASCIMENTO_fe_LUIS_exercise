interface URLSearchParams {
    /**
     * Returns an array of key, value pairs for every entry in the search params
     */
    entries(): IterableIterator<[string, string]>;
    /**
     * Returns a list of keys in the search params
     */
    keys(): IterableIterator<string>;
    /**
     * Returns a list of values in the search params
     */
    values(): IterableIterator<string>;
    /**
     * iterate over key/value pairs
     */
    [Symbol.iterator](): IterableIterator<[string, string]>;
}
