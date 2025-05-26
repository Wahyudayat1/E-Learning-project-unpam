"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { current } from '@reduxjs/toolkit'
import Image from 'next/image'
import { useCarousel } from './../../../../../asset-download/client/hooks/useCarousel';
import { Skeleton } from '@/components/ui/skeleton'

const LoadingSkeleton = () => {
  return (
    <div className="landing-skeleton">
      <div className='landing-skeleton__herp'>
        <div className="landing-skeleton__hero-content">
          <Skeleton className='landing-skeleton__title' />
          <Skeleton className='landing-skeleton__subtitle' />
          <Skeleton className='landing-skeleton__subtitle-secondary' />
          <Skeleton className='landing-skeleton__button' />
        </div>
          <Skeleton className='landing-skeleton__hero-image' />
      </div>
      <div className='landing-skeleton__featured'>
        <Skeleton className='landing-skeleton__featured-title' />
        <Skeleton className='landing-skeleton__featured-description' />

        <div className="landing-skeleton__tags">
          {[1,2,3,4,5].map((_, index) => (
            <Skeleton key={index} className='landing-skeleton__tag' />
          ))}
        </div>

        <div className="landing-skeleton__courses">
          {[1,2,3,4].map((_, index) => (
            <Skeleton key={index} className='landing-skeleton__course-card' />
          ))}
        </div>
      </div>
    </div>
  )
}

const Landing = () => {
  const currentImage = useCarousel({totalImages: 3, interval: 3000});


  return (
    <motion.div 
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="landing"
    >   
        <motion.div 
        initial={{ y:20, opacity: 0}}
        animate={{ y:0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__hero"
        >
        <div className='landing__hero-content'>
            <h1 className='landing__title'>SiRumed</h1>
            <p className='landing__description'>Sebuah sistem pelatihan medical berbasis online.
            <br />
            SiRumed menyediakan berbagai materi pelatihan yang dapat diakses kapan saja dan di mana saja.
            </p>
            <div className="landing__cta">
                <Link href="/search">
                    <div className="landing__cta-button">Search for Courses</div>
                </Link>
            </div>
        </div>

        <div className='landing__hero-images'>
          {["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"].map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Hero Banner ${index + 1}`}
          fill
          priority={index === currentImage}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className={`landing__hero-image ${
            index === currentImage ? 'landing__hero-image--active' : ''
          }`}
        />
      ))}
        </div>
        </motion.div>
        <motion.div
        initial={{ y:20, opacity: 0}}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{amount: 0.3, once: true}}
        className="landing__featured"
        >
          <h2 className='landing__featured-title'>Featured Courses</h2>
          <p className='landing__featured-description'>
            Temukan kursus-kursus unggulan yang telah dipilih secara khusus untuk membantu Anda dalam perjalanan pembelajaran medis Anda.
            <br />
            Dari dasar-dasar hingga topik lanjutan, kami memiliki sesuatu untuk semua orang.
          </p>

          <div className="landing__tags">
            {[
              "Anatomy", 
              "Physiology", 
              "Pathology", 
              "Pharmacology", 
              "Clinical Skills"
              ].map((tag, index) => (
                <span key={index} className="landing__tag">
                  {tag}
                </span>
              ))}
          </div>

          <div className="landing__courses">
            {/* Courses Display */}
          </div>
        </motion.div>
    </motion.div>
  )
}

export default Landing