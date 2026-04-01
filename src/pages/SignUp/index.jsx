import React from "react";
import {
    HeroSection,
    HeroContainer,
    HeroContent,
    HeroTitle,
    HeroText,
    HeroForm,
    HeroInput,
    HeroButton,
    HeroNote,
    HeroSecondary,
    HeroVisual,
    ImageWrapper,
} from "./styles";

export default function Signup() {
    return (
        <HeroSection>
            <HeroContainer>

                {/* COLUNA TEXTO */}
                <HeroContent>
                    <HeroTitle>
                        Cut the buzz. Keep the focus.
                    </HeroTitle>

                    <HeroText>
                        Stop buzzing through endless tasks. Kanbee helps you focus, organize,
                        and actually get things done—wherever you are.
                    </HeroText>

                    <HeroForm>
                        <HeroInput type="email" placeholder="Enter your email" />
                        <HeroButton>Start for free</HeroButton>
                    </HeroForm>

                    <HeroNote>
                        By signing up, you agree to our Terms & Privacy Policy.
                    </HeroNote>

                    <HeroSecondary>
                        See how it works →
                    </HeroSecondary>
                </HeroContent>

                {/* COLUNA VISUAL */}
                <HeroVisual>
                    <ImageWrapper>
                        <img src="" alt="Kanbee app preview" />
                    </ImageWrapper>
                </HeroVisual>

            </HeroContainer>
        </HeroSection>
    );
}