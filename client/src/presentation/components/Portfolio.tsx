import React, { useState, useEffect } from 'react';
import { PersonalInfoEntity } from '../../domain/entities/PersonalInfo';
import { ProjectEntity } from '../../domain/entities/Project';
import { InMemoryProjectRepository } from '../../infrastructure/repositories/InMemoryProjectRepository';
import { InMemoryPersonalInfoRepository } from '../../infrastructure/repositories/InMemoryPersonalInfoRepository';
import { InstagramIcon, EmailIcon, LinkedInIcon } from './Icons';
import { useVisitorTracking } from '../../hooks/useVisitorTracking';
import { VisitorCounter } from './VisitorCounter';
import About from './About';
import Career from './Career';
import Processes from './Processes';
import ProjectCreation from './ProjectCreation';
import ProjectDetail from './ProjectDetail';
import Final from './Final';
import Navigation from './Navigation';
import Guestbook from './Guestbook';
import {
    Container,
    Avatar,
    Name,
    Title,
    StartButton,
    SocialLinks,
    SocialLink,
    LoadingContainer,
    ErrorContainer,
} from './Portfolio.styles';

const Portfolio: React.FC = () => {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfoEntity | null>(null);
    const [projects, setProjects] = useState<ProjectEntity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const totalPages = 5 + projects.length + 2; // Home, About, Career, Processes, ProjectCreation, Projects, Guestbook, Final

    const getPageName = (pageIndex: number): string => {
        if (pageIndex === 0) return 'home';
        if (pageIndex === 1) return 'about';
        if (pageIndex === 2) return 'career';
        if (pageIndex === 3) return 'processes';
        if (pageIndex === 4) return 'project-creation';
        if (pageIndex > 4 && pageIndex <= 4 + projects.length) return projects[pageIndex - 5].title;
        if (pageIndex === 5 + projects.length) return 'guestbook';
        if (pageIndex === 6 + projects.length) return 'final';
        return 'unknown';
    };

    const { visitorStats, isLoading: trackingLoading } = useVisitorTracking(getPageName(currentPage));

    const showAbout = currentPage === 1;
    const showCareer = currentPage === 2;
    const showProcesses = currentPage === 3;
    const showProjectCreation = currentPage === 4;
    const showGuestbook = currentPage === 5 + projects.length;
    const showFinal = currentPage === 6 + projects.length;

    useEffect(() => {
        const loadData = async () => {
            try {
                const personalInfoRepo = new InMemoryPersonalInfoRepository();
                const personalInfoData = await personalInfoRepo.getPersonalInfo();
                setPersonalInfo(personalInfoData);

                const projectRepo = new InMemoryProjectRepository();
                const projectData = await projectRepo.getAllProjects();
                setProjects(projectData);

            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load data');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const handleStartClick = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(1); // Go to About page
            setIsTransitioning(false);
        }, 150);
    };

    const handleNavigationPrevious = () => {
        if (currentPage > 0 && !isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentPage(currentPage - 1);
                setIsTransitioning(false);
            }, 150);
        }
    };

    const handleNavigationNext = () => {
        if (currentPage < totalPages - 1 && !isTransitioning) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
                setIsTransitioning(false);
            }, 150);
        }
    };

    const handleClosePage = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(0); // Return to home
            setIsTransitioning(false);
        }, 150);
    };

    if (loading) {
        return (
            <LoadingContainer>
                <p>Loading...</p>
            </LoadingContainer>
        );
    }

    if (error || !personalInfo) {
        return (
            <ErrorContainer>
                <h2>Oops! Something went wrong</h2>
                <p>{error || 'Failed to load personal information'}</p>
            </ErrorContainer>
        );
    }

    return (
        <>
            <Container isHidden={currentPage !== 0}>
                <Avatar
                    src={personalInfo.avatarUrl}
                    alt={`${personalInfo.name} avatar`}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjE0NSIgdmlld0JveD0iMCAwIDE0NSAxNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNDUiIGhlaWdodD0iMTQ1IiByeD0iNzIuNSIgZmlsbD0iIzUwRkY2QyIvPgo8dGV4dCB4PSI3Mi41IiB5PSI4MCIgZm9udC1mYW1pbHk9IlNGIFBybyBEaXNwbGF5IiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMUExQTFBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn5mCPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                />

                <Name>{personalInfo.name}</Name>
                <Title>{personalInfo.title}</Title>

                <StartButton onClick={handleStartClick}>
                    Start
                </StartButton>

                <SocialLinks>
                    <SocialLink href="https://www.instagram.com/teusdrz/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                        <div>
                            <div>Instagram</div>
                            <div style={{ color: '#50FF6C' }}>@teusdrz</div>
                        </div>
                    </SocialLink>

                    <SocialLink href="mailto:matheusviniciusdrs5555@gmail.com">
                        <EmailIcon />
                        <div>
                            <div>Mail</div>
                            <div style={{ color: '#50FF6C' }}>matheusviniciusdrs5555@gmail.com</div>
                        </div>
                    </SocialLink>

                    <SocialLink href="https://www.linkedin.com/in/matheus-vinicius-82b50a26b/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                        <div>
                            <div>LinkedIn</div>
                            <div style={{ color: '#50FF6C' }}>Matheus Vinicius</div>
                        </div>
                    </SocialLink>
                </SocialLinks>
            </Container>

            <About isVisible={showAbout} onClose={handleClosePage} onNext={() => setCurrentPage(2)} />
            <Career isVisible={showCareer} onClose={handleClosePage} onNext={() => setCurrentPage(3)} />
            <Processes isVisible={showProcesses} onClose={handleClosePage} onNext={() => setCurrentPage(4)} />
            <ProjectCreation isVisible={showProjectCreation} onClose={handleClosePage} onNext={() => setCurrentPage(5)} />

            {projects.map((project, index) => (
                <ProjectDetail
                    key={project.id}
                    projectId={project.id}
                    isVisible={currentPage === 5 + index}
                    onClose={handleClosePage}
                    onNext={() => setCurrentPage(currentPage + 1)}
                />
            ))}

            <Guestbook
                isVisible={showGuestbook}
                onClose={handleClosePage}
                onNext={() => setCurrentPage(currentPage + 1)}
            />

            <Final isVisible={showFinal} onBackToTop={() => setCurrentPage(0)} />

            {currentPage > 0 && (
                <Navigation
                    currentPage={currentPage - 1}
                    totalPages={totalPages - 1}
                    onPrevious={handleNavigationPrevious}
                    onNext={handleNavigationNext}
                    canGoPrevious={currentPage > 1}
                    canGoNext={currentPage < totalPages - 1}
                />
            )}

            <VisitorCounter
                stats={visitorStats}
                currentPage={getPageName(currentPage)}
                isLoading={trackingLoading}
            />
        </>
    );
};

export default Portfolio;
