import React from 'react';

export const getSuggestionValue = (suggestion: any) => suggestion.trim();

export const renderSuggestion = (suggestion: any) => (
    <span>
        {suggestion}
    </span>
);