import React from 'react';
import {
    NavigationContainer,
    NavigationButton,
    PageIndicator,
    Dot,
} from './Navigation.styles';

interface NavigationProps {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
    canGoPrevious: boolean;
    canGoNext: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
    currentPage,
    totalPages,
    onPrevious,
    onNext,
    canGoPrevious,
    canGoNext,
}) => {
    return (
        <NavigationContainer>
            <NavigationButton
                onClick={onPrevious}
                disabled={!canGoPrevious}
                aria-label="Página anterior"
            >
                ←
            </NavigationButton>

            <PageIndicator>
                {Array.from({ length: totalPages }, (_, index) => (
                    <Dot key={index} active={index === currentPage} />
                ))}
            </PageIndicator>

            <NavigationButton
                onClick={onNext}
                disabled={!canGoNext}
                aria-label="Próxima página"
            >
                →
            </NavigationButton>
        </NavigationContainer>
    );
};

export default Navigation;
