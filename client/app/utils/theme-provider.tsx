'use client'
import * as React from 'react';

import { ThemeProvider as NextthemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/type';

export function ThemeProvider({children, ...props} : ThemeProviderProps){
    return <NextthemesProvider {...props}>{children}</NextthemesProvider>
}