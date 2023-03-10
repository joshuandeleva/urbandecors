import HeroImg from 'assets/hero-img.png';
import { Hero } from 'components/hero';
import { FC } from 'react';
export const Home: FC = () => {
    return (
        <>
            <div className="lg:pr-10 lg:pl-10">
                <Hero
                    title="Find your dream furniture with us"
                    image={HeroImg}
                    description="We help you make your home tidy and beautiful home .Our PRoducts are the right items to make a minimalist home that looks neat and well planned ,Buyong furniture should leave you happy and give a good looking home"
                />
            </div>
        </>
    );
};
