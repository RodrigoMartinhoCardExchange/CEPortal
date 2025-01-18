export { };

declare global {
    interface String {
        /**
         * Converts a string to Pascal Case.
         * 
         * This function capitalizes the first letter of each word in the provided string
         * and converts the rest of the characters in each word to lowercase.
         *
         * @returns The pascal-cased string.
         */
        toPascalCase(): string;
    }
}

String.prototype.toPascalCase = function (): string {
    return this.replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
};