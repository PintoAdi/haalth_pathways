
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCard } from '../components/StatsCard';
import { HealthcarePieChart, HealthcareBarChart } from '../components/HealthcareChart';
import { SurveyTable } from '../components/SurveyTable';
import { surveyData } from '../data/surveyData';
import { Activity, Users, Heart, TrendingUp } from 'lucide-react';

const Index = () => {
  // Calculate statistics
  const modernCount = surveyData.filter(r => r.modernHealthcare).length;
  const traditionalCount = surveyData.filter(r => r.traditionalHealthcare).length;
  const dependsCount = surveyData.filter(r => r.dependsOnSituation).length;
  const total = surveyData.length;

  const chartData = [
    { name: 'Modern Healthcare', value: modernCount, color: '#007AFF' },
    { name: 'Traditional Healthcare', value: traditionalCount, color: '#34C759' },
    { name: 'Depends on Situation', value: dependsCount, color: '#FF9500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Apple-style hero section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        <div className="container mx-auto px-6 pt-20 pb-16 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Healthcare
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Pathways</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Comprehensive analysis of healthcare preferences among 50 residents of Buchhi, Nellore.
              <br />
              Understanding the choice between modern healthcare, traditional healthcare, and situational preferences.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <StatsCard
              title="Total Responses"
              value={total}
              percentage={100}
              color="bg-gradient-to-br from-blue-100 to-blue-200"
              icon={<Users className="h-6 w-6 text-blue-600" />}
            />
            <StatsCard
              title="Modern Healthcare"
              value={modernCount}
              percentage={(modernCount / total) * 100}
              color="bg-gradient-to-br from-blue-100 to-indigo-200"
              icon={<Activity className="h-6 w-6 text-blue-600" />}
            />
            <StatsCard
              title="Traditional Healthcare"
              value={traditionalCount}
              percentage={(traditionalCount / total) * 100}
              color="bg-gradient-to-br from-green-100 to-emerald-200"
              icon={<Heart className="h-6 w-6 text-green-600" />}
            />
            <StatsCard
              title="Depends on Situation"
              value={dependsCount}
              percentage={(dependsCount / total) * 100}
              color="bg-gradient-to-br from-orange-100 to-yellow-200"
              icon={<TrendingUp className="h-6 w-6 text-orange-600" />}
            />
          </div>

          {/* Key Insights */}
          <Card className="mb-16 backdrop-blur-xl bg-white/70 border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50/50 to-pink-50/50 pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold text-gray-900">
                <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                Key Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-all duration-500 hover:scale-105">
                  <h3 className="font-semibold text-blue-900 mb-3 text-lg">Modern Healthcare</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {modernCount} residents ({((modernCount / total) * 100).toFixed(1)}%) prefer modern healthcare
                    for its scientific approach and advanced treatments.
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl hover:shadow-lg transition-all duration-500 hover:scale-105">
                  <h3 className="font-semibold text-green-900 mb-3 text-lg">Traditional Healthcare</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {traditionalCount} residents ({((traditionalCount / total) * 100).toFixed(1)}%) trust traditional 
                    medicine for its cultural significance and accessibility.
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-100 rounded-2xl hover:shadow-lg transition-all duration-500 hover:scale-105">
                  <h3 className="font-semibold text-orange-900 mb-3 text-lg">Situational Choice</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {dependsCount} residents ({((dependsCount / total) * 100).toFixed(1)}%) believe the choice 
                    depends on the specific health situation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Apple-style Tabs */}
          <Tabs defaultValue="charts" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white/70 backdrop-blur-xl rounded-2xl p-2 shadow-lg border-0">
              <TabsTrigger 
                value="charts" 
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300 font-medium"
              >
                Data Visualization
              </TabsTrigger>
              <TabsTrigger 
                value="table" 
                className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300 font-medium"
              >
                Detailed Responses
              </TabsTrigger>
            </TabsList>

            <TabsContent value="charts" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <HealthcarePieChart data={chartData} />
                <HealthcareBarChart data={chartData} />
              </div>
            </TabsContent>

            <TabsContent value="table" className="animate-fade-in">
              <SurveyTable data={surveyData} />
            </TabsContent>
          </Tabs>

          {/* Summary */}
          <Card className="mt-16 backdrop-blur-xl bg-white/70 border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-50/50 to-purple-50/50">
              <CardTitle className="text-2xl font-semibold text-gray-900">Survey Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <p className="text-lg">
                  This comprehensive survey of 50 residents from Buchhi, Nellore reveals interesting patterns in healthcare preferences. 
                  The data shows that <strong className="text-orange-600">{((dependsCount / total) * 100).toFixed(1)}%</strong> of respondents believe that healthcare choice 
                  depends on the specific situation, indicating a pragmatic approach to healthcare decisions.
                </p>
                <p className="text-lg">
                  <strong className="text-green-600">{((traditionalCount / total) * 100).toFixed(1)}%</strong> of residents prefer traditional healthcare, 
                  reflecting the strong cultural heritage and trust in traditional healing methods in the region. 
                  Meanwhile, <strong className="text-blue-600">{((modernCount / total) * 100).toFixed(1)}%</strong> favor modern healthcare approaches.
                </p>
                <p className="text-lg">
                  These findings suggest that an integrated healthcare approach, combining both modern and traditional 
                  methods based on individual needs and situations, could be most effective for this community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
